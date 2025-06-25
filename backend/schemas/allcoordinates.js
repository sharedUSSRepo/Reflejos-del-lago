var mongoose = require('mongoose');

const CitiesCoordiantes = new mongoose.Schema(
    {
        cityname: {
            type: String,
            required: [true, 'city name is mandatory']
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
CitiesCoordiantes.index({ latitude: 1, longitude: 1 }, { unique: true });

module.exports = mongoose.model('cities_coordinates', CitiesCoordiantes);