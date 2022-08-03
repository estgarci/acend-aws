// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const flightSchema = new Schema({

// }, {
//     timestamps: true,
//     strict: false
// });

// const favoriteSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     flights: [Object]
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Favorite', favoriteSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    flights: [{
        type: [Object],
        ref: 'Flight'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);