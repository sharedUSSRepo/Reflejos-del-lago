const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const User = require("../schemas/leaderboard.js");

mongodb();

router.get('/', async function (req, res) {
    try {
        const users = await User.find({}).sort({ score: -1 }).limit(100).exec();
        res.json({ users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
