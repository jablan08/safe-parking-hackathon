const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const session = require("express-session");

const resourceRouter = require('./routes/resources');
const adminRouter = require('./routes/admin');

const app = express();
require("dotenv").config();
require("./db/db")
// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/resources', resourceRouter);
app.use('/admin', adminRouter);

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
