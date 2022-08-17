const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');
const cors = require('./cors');
const config = require('../config');
const usersRouter = express.Router();

// usersRouter.route('/')
//     .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
//     .get(cors.corsWithOptions,
//     (req, res, next) => {
//         User.find()
//         .then(users => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(users);
//         })
//         .catch(err => next(err));
// });

usersRouter.route('/singup')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(cors.cors,
            (req, res) => {
                User.register(
                    new User({
                        username: req.body.email,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    }),
                    req.body.password,
                    (err, user) => {
                        if (err) {
                            if (err.name === 'UserExistsError'){
                                res.statusCode = 409
                                res.json({ err: err});
                                return
                            }
                            else{
                                res.statusCode = 500;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ err: err});
                                return
                            }
                        } if(user) {
                            user.save(err => {
                                if (err) {
                                    res.statusCode = 500;
                                    res.setHeader('Content-Type', 'application/json');
                                    res.json({err: err});
                                    return;
                                }
                                res.statusCode = 201;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({success: true, status: 'Registration Successful!'});
                            });
                        }
                        else{
                            console.log("something weird happened")
                        }
                    }
                );
});

usersRouter.route('/login')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,
        (req, res, next) => {
            User.find()
            .then(users => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            })
            .catch(err => next(err));
    })
    .post(cors.corsWithOptions,
        passport.authenticate('local'),
        (req, res) => {
            const token = authenticate.getToken({_id: req.user._id});
            res.cookie('token', token, {signed: true, httpOnly:true});
            res.json({status: "Login valid!", success: true, user: req.user});
         }
);

usersRouter.route('/logout')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,
        authenticate.verifyUser,
        (req, res, next) => { 
            if (req.user) {
                console.log('logging out user')
                res.clearCookie('token', {maxAge:1})
                res.json({success:true})
            } else {
                const err = new Error('You are not logged in!');
                err.status = 401;
                return next(err);
            }
        }
);
 
usersRouter.route('/login/failed')
    .get((req, res) => {
        res.status(401).json({
        success: false,
        message: "failure",
        });
    }
);

usersRouter.route('/oauth/login/success')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors,
        (req, res) => {
            passport.authenticate('jwt', {session: false}, (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    return res.json({status: "JWT invalid!", success: false, err: info});
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    return res.json({status: "JWT valid!", success: true, user: user});
                }
            })(req, res);
        });

usersRouter.route('/google')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,
        passport.authenticate("google", { scope: ["profile"], accessType: 'offline', prompt: 'consent'}),
        (req, res) => {
            console.log(res)
        });

usersRouter.route('/google/callback')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,
        passport.authenticate("google", {failureRedirect: "/login/failed"}),
        (req, res) => {
            if (req.user) {
                const token = authenticate.getToken({_id: req.user._id});
                res.cookie('token', token, {signed: true, httpOnly:true});
                res.redirect(config.clientURL);
            }
        }
    );

module.exports = usersRouter;