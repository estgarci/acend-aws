const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const flightSchema = new Schema({

}, {
    timestamps: true,
    strict: false
});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;