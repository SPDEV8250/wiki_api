require("dotenv").config();

//jshint esversion:6

const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;


const connectDB = require("./db/connect");

app.get("/",(req,res)=>{

    res.send("I am Live");
});

const products_routes = require("./routes/products");
app.use("/api/products", products_routes);


const start = async ()=>{
    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log("Yes i am connected "+ PORT);
        });
    }catch(error){
        console.log(error);
    }
};

start();
