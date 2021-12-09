const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const airportSchema = new Schema({
    ident: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    continent: {
        type: String,
        required: true,
        unique: true
    },
    iso_country: {
        type: String,
        required: true,
        unique: true
    },
    iso_region: {
        type: String,
        required: true,
        unique: true
    },
    municipality: {
        type: String,
        required: true,
        unique: true
    },
    local_code: {
        type: String,
        required: true,
        unique: true
    },
    coordinates: {
        type: String,
        required: true,
        unique: true
    }
});

const Airport = mongoose.model('airport', airportSchema);

module.exports = Airport;