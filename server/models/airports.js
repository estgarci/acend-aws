const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
    ident: {
        type: String,
        required: false,
        unique: true
    },
    type: {
        type: String
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    elevation: {
        type: String
    },
    continent: {
        type: String
    },
    iso_country: {
        type: String
    },
    iso_region: {
        type: String
    },
    municipality: {
        type: String,
        required: true
    },
    gps_code: {
        type: String
    },
    local_code: {
        type: String
    },
    coordinates: {
        type: String
    }
});

const Airport = mongoose.model('airport', airportSchema);

module.exports = Airport;