import { useEffect } from "react";
import { useVote } from "../contexts/VoteContext";
import { connectSocket, subscribeToNewMessages } from "../socketApi";
import Options from "./Options";
import Question from "./Question";

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
    </div>
  );
}

export default Container;
