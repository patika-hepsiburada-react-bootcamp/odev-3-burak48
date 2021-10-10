const redisClient = require("../redis");

function Votes() {
  this.client = redisClient;
}

module.exports = new Votes();

Votes.prototype.upsert = function (key, value) {
  this.client.set(key, value, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

Votes.prototype.incr = function (key) {
  this.client.incr(key, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

// Votes.prototype.list = function (callback) {
//   this.client.get("online", function (err) {
//     if (err) {
//       console.error(err);
//       return callback([]);
//     }
//     return callback(data);
//   });
// };
