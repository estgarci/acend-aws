var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv")
dotenv.config()
const config = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const airportRouter = require('./routes/airportRouter');
const countryRouter = require('./routes/countryRouter');
const flightsRouter = require('./routes/flightsRouter');
const favoritesRouter = require('./routes/favoriteRouter');
const authRouter = require('./routes/auth');

const mongoose = require('mongoose');
const url = config.mongoUrl

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
//Secure traffic only, catches any time of request , post, delete, any path
app.all('*', (req, res, next) => {
  //secure property is automatically set to true if its https, express helps us with this...
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
app.use(cookieParser('secret'));
// allows POSTing nested objects
app.use(express.urlencoded({ extended: false }));

//initialize and session are required whenever you use express sessions, two middlewares to check incomming requests
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
// app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('C:/Users/01est/Documents/learning/mywork/acend-aws/client/build'));

app.use('/api/auth', authRouter);
app.use('/api/airports', airportRouter);
app.use('/api/countries', countryRouter);
app.use('/api/flights', flightsRouter);
app.use('/api/favorites', favoritesRouter);

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
