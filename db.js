const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.mongoDBURL;
mongoose.connect(mongoURL); //Define URL and pass it onto this function for establishing connection.

const db = mongoose.connection; //Object which you will use further for establishing connection further with Node JS Server.

//Event listeners:
db.on('connected',()=>{
    console.log("MongoDB Connected");
});

db.on('disconnected',()=>{
    console.log("Disconnected from MongoDB");
});

db.on('error',(err)=>{
    console.error("The error is: ",err);
});

module.exports = db;