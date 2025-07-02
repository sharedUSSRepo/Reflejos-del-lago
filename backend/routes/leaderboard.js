const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const Game = require("../schemas/games.js"); // Cambia al schema correcto

mongodb();

router.get('/', async function (req, res) {
    try {
        const leaderboard = await Game.aggregate([
            {
                $group: {
                    _id: "$username",
                    total_score: { $sum: "$score" },
                    total_plays: { $sum: 1 },
                    average_score: { $avg: "$score" }
                }
            },
            {
                $project: {
                    _id: 0,
                    username: "$_id",
                    score: "$total_score",
                    total_plays: 1,
                    average_score: { $round: ["$average_score", 2] }
                }
            },
            {
                $sort: { score: -1 }
            },
            {
                $limit: 100
            }
        ]);

        res.json({ users: leaderboard });
    } catch (err) {
        console.error("Error fetching leaderboard:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
