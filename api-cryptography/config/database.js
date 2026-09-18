const mongoose = require("mongoose");
require("dotenv").config();

console.log("URI:", process.env.MONGODB_URI);

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected!");
    } catch(err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectDatabase;