const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy; //not ussing sessions anymore, using tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('./models/user');
const FacebookTokenStrategy = require('passport-facebook-token'); //fb token strat
const config = require('./config.js');

//adding specific strategy that we would like to use, requires a verify callback func. Use the authenticate method
//passport-local-mongoose helps us with this by adding that func

//this will be using express sessions
exports.local = passport.use(new LocalStrategy(User.authenticate()));
//the process of serialization and deserialization needs to happen every time we authenticate
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: 3600});
};

const opts = {};
//this option specifies how the jsonwebtoken should be extracted, because it can be sent in the request header, body or query parameter //please send the token to us in the auth header as a bearer token
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;//key to sign the token

//using strategy
exports.jwtPassport = passport.use(
    new JwtStrategy(
        opts,
        (jwt_payload, done) => {
            console.log('JWT payload:', jwt_payload);
            User.findOne({_id: jwt_payload._id}, (err, user) => {
                if (err) {
                    return done(err, false);
                } else if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
    )
);

exports.verifyAdmin = (req, res, next) => {
    if (req.user.admin){
        return next();
    } else {
        const err = new Error('You are not authorized to perform this operation!');
        err.status = 403 ;
        return next(err);
    }
};

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.facebookPassport = passport.use(
    new FacebookTokenStrategy(
        {
            clientID: config.facebook.clientId,
            clientSecret: config.facebook.clientSecret
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({facebookId: profile.id}, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (!err && user) {
                    return done(null, user);
                } else {
                    user = new User({ username: profile.displayName });
                    user.facebookId = profile.id;
                    user.firstname = profile.name.givenName;
                    user.lastname = profile.name.familyName;
                    user.save((err, user) => {
                        if (err) {
                            return done(err, false);
                        } else {
                            return done(null, user);
                        }
                    });
                }
            });
        }
    )
);