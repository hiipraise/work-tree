const mongoose = require("mongoose");

require("dotenv").config();
const dbstring = process.env.DBSTRING;

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(dbstring, {});
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
// connectDB();

module.exports = connectDB;