const cors = require('cors');
// whitelist includes: requests from http, client and https
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://localhost:3443', 'https://127.0.0.1:3443', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.acend.site', 'https://acend.site','http://3.133.254.105'];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log('origin making request: ', req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, credentials: true, allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'] };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);