var mongoose = require("mongoose");
var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load environment variables from .env file

var mongodb = require("./mongodb.js");
var user = require("../schemas/leaderboard.js");

const data = [{ username: "alan", score: 10, total_plays: 2, average_score: 5 },
{ username: "dante", score: 20, total_plays: 999, average_score: 5 },
{ username: "vincent", score: 30, total_plays: 6, average_score: 5 }
];

mongodb();

mongoose.connection.once("open", () => {
  async function create() {
    user.deleteMany({}).then(() => {
      user.insertMany(data)
        .then(() => {
          user.find({}).then((res) => {
            console.log(res);
          });
        });
    });
  }
  create();
});
