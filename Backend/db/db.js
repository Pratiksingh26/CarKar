const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Error connecting to DB", error);
    });
}

module.exports = connectToDb;