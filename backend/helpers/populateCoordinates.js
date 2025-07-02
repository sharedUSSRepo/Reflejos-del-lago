var mongoose = require("mongoose");
var path = require('path');
const { alotofCoords } = require("../data/alotofCoords.js");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load environment variables from .env file

var mongodb = require("./mongodb.js");
var allcoordinates = require("../schemas/allcoordinates.js");

mongodb();

mongoose.connection.once("open", () => {
    async function create() {
        allcoordinates.deleteMany({}).then(() => {
        allcoordinates.insertMany(alotofCoords)
            .then(() => {
            allcoordinates.find({}).then((res) => {
                console.log(res);
            });
            });
        });
    }
    create();
});