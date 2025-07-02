var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongodb = require('./helpers/mongodb')
var dotenv = require("dotenv");
const session = require('express-session');
const MongoStore = require('connect-mongo');
dotenv.config();

mongodb();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var versionRouter = require('./routes/version');
var leaderboardRouter = require('./routes/leaderboard');
var citiesRouter = require('./routes/cities');
var citiesCoordiantes = require('./routes/getrandomcoor');
var landingPageRouter = require('./routes/landingPage');

var app = express();

app.use(logger('dev'));
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/version', versionRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/cities', citiesRouter);
app.use('/allcoordinates', citiesCoordiantes);
app.use('/landingPage', landingPageRouter);

module.exports = app;
