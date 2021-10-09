import { useEffect } from "react";
import { connectSocket } from "../socketApi";

function Container() {
  useEffect(() => {
    connectSocket();
  });

  return <div></div>;
}

export default Container;
