const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const Game = require("../schemas/games.js");

mongodb();

router.put('/', async function (req, res) {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not logged" });
        }
        await Game.create({ 'username': req.session.user.username, 'gamemode': req.body.gamemode, 'score': req.body.score, 'rounds': req.body.rounds });
        return res.status(200).json({ message: "Game data saved successfully" });
    } catch (err) {
        console.error("Error saving user game info:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
