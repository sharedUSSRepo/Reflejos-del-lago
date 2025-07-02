var mongoose = require("mongoose");
var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

var mongodb = require("../helpers/mongodb.js");
var all_coordinates = require("../schemas/allcoordinates.js");

async function main() {
    await mongodb();
    await mongoose.connection.asPromise();

    const random = await all_coordinates.aggregate([{ $sample: { size: 1 } }]);
    const { cityname, latitude, longitude } = random[0];
    console.log(`Ciudad: ${cityname}, lat=${latitude}, lon=${longitude}`);
    await mongoose.connection.close();
}

main().catch(console.error);
