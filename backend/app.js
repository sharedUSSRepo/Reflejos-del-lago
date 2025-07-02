var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongodb = require('./helpers/mongodb')
var dotenv = require("dotenv");
dotenv.config();

mongodb();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var versionRouter = require('./routes/version');
var leaderboardRouter = require('./routes/leaderboard');
var citiesRouter = require('./routes/cities');
var getrandomcoorRouter = require('./routes/getrandomcoor');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/version', versionRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/cities', citiesRouter);
app.use('/coordinates', getrandomcoorRouter);

module.exports = app;
