var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const User = require("../schemas/users.js");

mongodb();

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/register', async function (req, res, _) {
  try {
    await User.create({ 'username': req.body.username, 'password': req.body.password })
    res.status(200).json({ message: 'OK' })
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
