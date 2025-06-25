var mongoose = require('mongoose');

const CitiesCenter = new mongoose.Schema(
    {
        cityname: {
            type: String,
            required: [true, 'city name is mandatory'],
            unique: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('cities_center', CitiesCenter);