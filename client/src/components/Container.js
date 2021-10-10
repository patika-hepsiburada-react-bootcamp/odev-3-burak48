import { useEffect } from "react";
import { useVote } from "../contexts/VoteContext";
import { connectSocket, subscribeToNewMessages } from "../socketApi";
import Options from "./Options";
import Question from "./Question";
// import Charts from "./Charts";

function Container() {
  const { setOptions } = useVote();

  useEffect(() => {
    connectSocket();
    subscribeToNewMessages((data) => setOptions(data));
  }, [setOptions]);

  return (
    <div>
      <Question />
      <Options />
      {/* <Charts data={Options} /> */}
    </div>
  );
}

export default Container;
