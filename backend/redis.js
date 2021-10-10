const Redis = require("ioredis");

const client = new Redis({
  password: "f23f4a5ced3d4dd68b05fc88485e99c3",
  host: "global-pleasant-quail-30048.upstash.io",
  port: "30048",
});

client.on("connect", () => console.log("Connected to Redis"));
client.on("ready", () => console.log("Ready to use"));
client.on("error", (err) => console.log(err.message));
client.on("end", () => console.log("Disconnected from Redis"));

module.exports = client;
