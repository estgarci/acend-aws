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


// router.post('/auth/github/', cors.corsWithOptions, async (req, res, next) => {

//     const bearer_token = await superAgent
//         .post('https://github.com/login/oauth/access_token')
//         .send({
//             client_id: config.github.clientId,
//             client_secret: config.github.clientSecret,
//             code: req.body.code
//         })
//         .set('Accept', 'application/json')
//         .then(response => response.body.access_token)
//         .catch(err => console.log(err))
    
//     const profile = await superAgent
//                             .get('https://api.github.com/user')
//                             .set('Authorization', `Bearer ${bearer_token}`)
//                             .set('User-Agent', 'Acend' )
//                             .then(result => result.body)
//                             .catch(err => console.log(err))

//     if ( profile.id){
//         User.findOne({githubId:  profile.id}, (err, user) => {
//             if (err) {
//                 console.log(err)
//             }
//             if (!err && user) {
//                 console.log('this user is already in database')
//             } else {
//                 console.log('new user, creating profile in database')
//                 user = new User({ username:  profile.login });
//                 user.githubId =  profile.id;
//                 user.save((err, user) => {
//                     if (err) {
//                         console.log('error saving user')
//                     } else {
//                         console.log('success!')
//                     }
//                 });
//             }
//         });
//     }

//     // const token = authenticate.getToken({_id: req.user._id});
//     res.setHeader('Content-Type', 'application/json');
//     res.json({success: true, token: token, status: 'You are successfully logged in!'});
// });
    

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
(req, res, next) => {
    if (req.user) {
        const token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, token: token, profile: req.user, status: 'You are successfully logged in!'});
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