const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    fa_flight_id: {
        type:String,
        required: true,
        unique:true
    }
}, {
    timestamps: true,
    strict: false
});

const Country = mongoose.model('Flight', flightSchema);
module.exports = Country;