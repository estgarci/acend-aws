import { library } from '@fortawesome/fontawesome-svg-core';
import { Component } from 'react';
// import GlobalStyle from './globalStyles';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt,  faGlobeAmericas, faSignInAlt, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faFulcrum} from '@fortawesome/free-brands-svg-icons';
// import {ThemeProvider} from 'styled-components';

import 'tippy.js/animations/perspective.css';

import React from 'react';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const airportRouter = require('./routes/airportRouter');
const countryRouter = require('./routes/countryRouter');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/acend';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//handling promisse based on connection status
connect.then(() => console.log('Connected correctly to server'), 
    err => console.log(err)
);

var app = express();

//Secure traffic only
app.all('*', (req, res, next) => {
  if (req.secure) {
      return next();
  } else {
      console.log(`Redirecting to: https://${req.hostname}:${app.get('secPort')}${req.url}`);
      res.redirect(301, `https://${req.hostname}:${app.get('secPort')}${req.url}`);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/airports', airportRouter);
app.use('/api/countries', countryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
