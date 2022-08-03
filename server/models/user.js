const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: true,
        unique: true,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    accessToken: String,
    refreshToken: String,
    admin: {
        type: Boolean,
        default: false
    }
});

//helps with additional authentication-related methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);