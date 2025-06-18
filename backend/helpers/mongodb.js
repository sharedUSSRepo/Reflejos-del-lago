var mongoose = require("mongoose");

const init = async () => {
  try {
    console.log(process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL);
    console.log("connected");
  } catch (err) {
    console.error("error: " + err.stack);
    process.exit(1);
  }
};

module.exports = init;
