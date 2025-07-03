var mongoose = require("mongoose");

const init = async () => {
  try {
    const uri = process.env.DB_URL
    console.log(uri);
    await mongoose.connect(uri);
    console.log("connected");
  } catch (err) {
    console.error("error: " + err.stack);
    process.exit(1);
  }
};

module.exports = init;
