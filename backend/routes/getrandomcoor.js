const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const Coordinate = require("../schemas/allcoordinates.js");

mongodb();

router.get('/', async function (req, res) {
    try {
        const coordinates = await Coordinate.find({}).exec();
        res.json({ coordinates });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
