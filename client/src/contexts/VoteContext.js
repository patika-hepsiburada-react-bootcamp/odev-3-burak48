import { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [options, setOptions] = useState({});
  const values = {
    options,
    setOptions,
  };
  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};
export const useVote = () => useContext(VoteContext);
