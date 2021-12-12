const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const countrySchema = new Schema({
    englishShortName: {
        type: String,
        required: true,
    },
    frenchShortName: {
        type: String
    },
    alpha2Code: {
        type: String
    },
    alpha3Code: {
        type: String
    },
    numeric: {
        type: String,
    }
})
//
const Country = mongoose.model('country', countrySchema);

module.exports = Country;