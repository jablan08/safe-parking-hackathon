var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
require("dotenv").config();
require("./db/db")
// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(session({
  secret: "organized",
  resave: false,
  saveUninitialized: false
}));

const corsOptions = {
  origin: "http://localhost:8889",
  credentials: true,
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
