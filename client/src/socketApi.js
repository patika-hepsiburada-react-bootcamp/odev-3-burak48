import { io } from "socket.io-client";

let socket;
export const connectSocket = () => {
  console.log("Connecting");
  socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("Connected");
  });

  socket.on("connect_error", () => {
    console.error("Connection Failed");
  });
};

export const sendMessage = (topic, data) => {
  if (!socket) {
    return false;
  }
  socket.emit(topic, data);
};

export const subscribeToNewMessages = (cb) => {
  if (!socket) {
    return false;
  }
  socket.on("new-vote", (message) => {
    cb(message);
  });
};
