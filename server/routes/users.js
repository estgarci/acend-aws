const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');
const router = express.Router();
const cors = require('./cors');
const config = require('../config');
const fetch = require('cross-fetch');
const axios = require('axios');
const superAgent = require('superagent')


/* GET users listing. */

router.options('*', cors.corsWithOptions, (req, res) => res.sendStatus(200));

router.get('/', cors.corsWithOptions, (req, res, next) => {
    User.find()
    .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    })
    .catch(err => next(err));
});

router.get('/facebook/token', cors.corsWithOptions, passport.authenticate('facebook-token'), (req, res) => {
  if (req.user) {
      const token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, token: token, status: 'You are successfully logged in!'});
  }
});
    

router.get('/github/token', cors.corsWithOptions
, (req, res, next) => {
    superAgent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id: config.github.clientId,
            client_secret: config.github.clientSecret,
            code: req.query.code
        })
        .set('Accept', 'application/json')
        .then(response => {
            if (!response.body.error){
                req.query.access_token = response.body.access_token
                next()
            }else{
                console.log('no access token returned')
                next(new Error(response.body.error))
            }
        })
        .catch(err => next(err))
}
, 
passport.authenticate('github-token'),
(req, res) => {
    if (req.user) {
        const token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({profile: JSON.stringify(req.user), success: true, token: token, status: 'You are successfully logged in!'});
    }
})


router.get('/github/token/test', cors.corsWithOptions
, (req, res, next) => {
    superAgent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id: config.github.clientId,
            client_secret: config.github.clientSecret,
            code: req.query.code
        })
        .set('Accept', 'application/json')
        .then(response => {
            if (!response.body.error){
                req.query.access_token = response.body.access_token
                next()
            }else{
                console.log('no access token returned')
                next(new Error(response.body.error))
            }
        })
        .catch(err => next(err))
}
, passport.authenticate('oauth2'), (req, res) => {
    if (req.user) {
        const token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, token: token, status: 'You are successfully logged in!'});
    }
})


router.get('/github/callback', cors.corsWithOptions, passport.authenticate('github-token'),
function(req, res) {
  res.redirect('/');
});

router.post('/signup', cors.corsWithOptions, (req, res) => {
  User.register(
      new User({username: req.body.username}),
      req.body.password,
      err => {
          if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({err: err});
          } else {
              passport.authenticate('local')(req, res, () => {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json({success: true, status: 'Registration Successful!'});
              });
          }
      }
  );
});

router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
  //issuing token
  const token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token, status: 'You are successfully logged in!'});
});


router.get('/logout', cors.corsWithOptions, (req, res, next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    } else {
        const err = new Error('You are not logged in!');
        err.status = 401;
        return next(err);
    }
});

module.exports = router