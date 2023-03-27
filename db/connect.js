const mongoose = require("mongoose");


uri = "mongodb+srv://suman:Ss427Ai5BauNZAsj@cluster0.hsgmqym.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = ()=>{
    console.log("connect DB");
    return mongoose.connect(uri);
};

module.exports = connectDB;



