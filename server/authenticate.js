const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy; //not ussing sessions anymore, using tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('./models/user');

const FacebookTokenStrategy = require('passport-facebook-token'); //fb token strat
const GitHubTokenStrategy = require('passport-github-token');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const config = require('./config.js');

//adding specific strategy that we would like to use, requires a verify callback func. Use the authenticate method
//passport-local-mongoose helps us with this by adding that func

//this will be using express sessions with passport
exports.local = passport.use(new LocalStrategy(User.authenticate()));
//the process of serialization and deserialization needs to happen every time we use sessions with passport

//when we recieve data about user from the request object and we need to convert it to store with the session data, serialization needs to happen
passport.serializeUser(User.serializeUser());
//when a user has been successfully vefiried, the user data has to be grabbed from the session and added to the request object. Passport wants us to specify a way to do this, Mongoose has a built in function thats gonna help us out. 
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: 7200});
};

const opts = {};
//this option specifies how the jsonwebtoken should be extracted, because it can be sent in the request header, body or query parameter 
//specifying options to send the token to us as a signed cookie, notice how the cors options also have to be changed for this to work...
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.jwtFromRequest = (req) => req.signedCookies.token
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
                    console.log(accessToken)
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


const GOOGLE_CLIENT_ID =
  "552397731405-91c2vs9p77lftrnr12hn2shcvtg8esll.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/users/google/callback"
      },
      (accessToken, refreshToken, profile, next) =>{
        User.findOne({username: profile.id}, (err, user) => {
            if (err) {
                console.log('an error occured finding user')
                return next(err, false);
            }
            if (!err && user) {
                console.log("user exists, returning that user")
                return next(null, user);
            } else {
                console.log("no error, creating new user")
                console.log(profile.name)
                user = new User({username:  profile.id});
                user.firstname = profile.name.givenName;
                user.lastname = profile.name.familyName;
                user.name =  profile.name.givenName + ' ' + profile.name.familyName;
                user.googleId = profile.id;
                user.save((err, user) => {
                    if (err) {
                        return next(err, false);
                    } else {
                        return next(null, user);
                    }
                });
            }
            })
    }
));
