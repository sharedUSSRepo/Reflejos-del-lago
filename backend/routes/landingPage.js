const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");

mongodb();

router.get('/', async function (req, res) {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: "Not logged" });
        }
        return res.json({ user: req.session.user });
    } catch (err) {
        console.error("Error fetching user info:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
