const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const City = require("../schemas/cities.js");

mongodb();

router.get('/', async function (req, res) {
    try {
        const cities = await City.find({}).exec();
        res.json({ cities });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
