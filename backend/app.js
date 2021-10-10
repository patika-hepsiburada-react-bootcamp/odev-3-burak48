const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

const client = require("./redis");
const Vote = require("./lib/Votes");

app.get("/", (req, res) => {
  // client.set("name", "burak");
  res.end("Vote App");
});

const votes = {
  windows: 0,
  macos: 0,
  linux: 0,
  other: 0,
};

io.on("connection", async (socket) => {
  console.log("Connected");

  //   socket.emit("new-vote", votes);

  votes.windows = Number(await client.get("windows"));
  votes.macos = Number(await client.get("macos"));
  votes.linux = Number(await client.get("linux"));
  votes.other = Number(await client.get("other"));

  socket.on("new-vote", (vote) => {
    // Vote.upsert("macos", 4);
    Vote.incr(vote);
    console.log("New Vote: ", vote.selectedOption);

    votes[vote.selectedOption] += 1;

    io.emit("new-vote", votes);
  });

  socket.on("disconnet", () => console.log("Disconnected"));
});

server.listen(3001, () => {
  console.log("Server is running on port: 3001");
});
