var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("../helpers/mongodb.js");
const User = require("../schemas/users.js");

mongodb();

router.post('/login', function (req, res) {
  if (req.session.user) {
    return res.status(200).json({ message: 'OK from session', user: req.session.user });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.comparePassword(password)) {
      req.session.user = user;
      return res.status(200).json({ message: 'OK', user });
    } else {
      return res.status(401).json({ error: 'Invalid password' });
    }
  }).catch(err => {
    console.error("Error during login:", err);
    res.status(500).json({ error: err });
  });
});

router.put('/register', async function (req, res, _) {
  try {
    await User.create({ 'username': req.body.username, 'password': req.body.password })
    res.status(200).json({ message: 'OK' })
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "El usuario ya existe" });
  }
});

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Logged out' });
    });
});

module.exports = router;
