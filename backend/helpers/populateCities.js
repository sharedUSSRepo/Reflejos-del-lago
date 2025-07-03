var mongoose = require("mongoose");
var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load environment variables from .env file

var mongodb = require("./mongodb.js");
var city = require("../schemas/cities.js");

var cities = [{ cityname: "Calbuco", latitude: -41.7712, longitude: -73.1275},
    { cityname: "Cochamó", latitude: -41.4942, longitude: -72.3067 },
    { cityname: "Fresia", latitude: -41.1531, longitude: -73.4223 },
    { cityname: "Frutillar", latitude: -41.1258, longitude: -73.0605 },
    { cityname: "Llanquihue", latitude: -41.25, longitude: -73.016666666667 },
    { cityname: "Los Muermos", latitude: -41.4, longitude: -73.483333333333},
    { cityname: "Maullín", latitude: -41.616666666667, longitude: -73.6},
    { cityname: "Puerto Montt", latitude: -41.4693, longitude: -72.94237},
    { cityname: "Puerto Varas", latitude: -41.31946, longitude: -72.98538}
];


mongodb();

mongoose.connection.once("open", () => {
    async function create() {
        city.deleteMany({}).then(() => {
        city.insertMany(cities)
            .then(() => {
            city.find({}).then((res) => {
                console.log(res);
                mongoose.connection.close();
            });
            });
        });
    }
    create();
});

