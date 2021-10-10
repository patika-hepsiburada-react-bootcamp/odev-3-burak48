const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("Vote App");
});

const votes = {
  windows: 0,
  macos: 0,
  linux: 0,
  other: 0,
};

io.on("connection", (socket) => {
  console.log("Connected");

  socket.on("new-vote", (vote) => {
    console.log("New Vote: ", vote.selectedOption);

    votes[vote.selectedOption] += 1;

    socket.emit("new-vote", votes);
  });

  socket.on("disconnet", () => console.log("Disconnected"));
});

server.listen(3001, () => {
  console.log("Server is running on port: 3001");
});
