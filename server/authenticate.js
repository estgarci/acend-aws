const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy; //not ussing sessions anymore, using tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('./models/user');
const FacebookTokenStrategy = require('passport-facebook-token'); //fb token strat
const GitHubTokenStrategy = require('passport-github-token');
const config = require('./config.js');
const superAgent = require('superagent')

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

exports.exchangeCodeforBearer = (req, res, next) => {
    superAgent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id: config.github.clientId,
            client_secret: config.github.clientSecret,
            code:req.body.code
        })
        .set('Accept', 'application/json')
        .then(function(result){
            req.setHeader('Authorization', 'Bearer ' + result.body.access_token)
        })
        .catch(err => next(err))
}

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.facebookPassport = passport.use(
    new FacebookTokenStrategy(
        {
            clientID: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.REACT_APP_FACEBOOK_SECRET_KEY
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

exports.githubPassport = passport.use(
    new GitHubTokenStrategy(
        {
            clientID: config.github.clientId,
            clientSecret: config.github.clientSecret,
        },
        (accessToken, refreshToken, profile, next) => {
            User.findOne({username: profile.id}, (err, user) => {
                if (err) {
                    console.log('an error occured finding user')
                    return next(err, false);
                }
                if (!err && user) {
                    console.log("user exists, returning that user")
                    console.log(user)
                    return next(null, user);
                } else {
                    console.log("no error, creating new user")
                    console.log(profile.name)
                    user = new User({username:  profile.id});
                    user.firstname = profile.name.givenName;
                    user.lastname = profile.name.familyName;
                    user.name =  profile.name.givenName + ' ' + profile.name.familyName
                    user.githubId = profile.id;
                    user.save((err, user) => {
                        if (err) {
                            return next(err, false);
                        } else {
                            return next(null, user);
                        }
                    });
                }
            });
        }
    )
);

exports.getGithubUser = async (code) => {
    const githubToken = await superAgent.post(
        `https://github.com/login/oauth/access_token?client_id=${config.github.clientId}&client_secret=${config.github.clientSecret}&code=${code}`
      )
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });

    const decoded = querystring.parse(githubToken);

    const accessToken = decoded.access_token;
}