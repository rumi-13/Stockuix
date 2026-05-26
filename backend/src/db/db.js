require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_URL;

function connectDB() {
  mongoose.connect(DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {   
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectDB;
