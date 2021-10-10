import { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [options, setOptions] = useState({
    windows: 0,
    macos: 0,
    linux: 0,
    other: 0,
  });
  const values = {
    options,
    setOptions,
  };
  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};
export const useVote = () => useContext(VoteContext);
