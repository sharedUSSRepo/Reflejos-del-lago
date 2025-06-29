var mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is mandatory'],
      unique: true
    },
    score: {
      type: Number,
    },
    total_plays: {
      type: Number,
    },
    average_score: {
      type: Number,
    },
  },
  { timestamps: true },
);

module.exports =  mongoose.model('leaderboard', LeaderboardSchema);