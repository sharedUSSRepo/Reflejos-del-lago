const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const Coordinate = require("../schemas/allcoordinates.js");

let dbConnected = false;

router.get('/', async function (req, res) {
    try {
        if (!dbConnected) {
            await mongodb();
            await mongoose.connection.asPromise();
            dbConnected = true;
        }
        const coordinates = await Coordinate.aggregate([{ $sample: { size: 1 } }]);
        const { cityname, latitude, longitude } = coordinates[0];
        res.json({ 
            cityname,
            lat:latitude,
            lng:longitude
        });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
