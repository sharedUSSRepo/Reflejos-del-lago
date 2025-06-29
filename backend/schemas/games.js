var mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is mandatory'],
      unique: true
    },
    game_type: {
        type: String,
        required: [true, 'game_type is mandatory'],
    },
    score: {
      type: Number,
    },
    rounds: {
        type: Array, // e.g.: [{round: 1, score: 10}, {round: 2, score: 20}...]
    }
  },
  { timestamps: true },
);

module.exports =  mongoose.model('games', GamesSchema);