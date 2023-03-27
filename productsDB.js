
 const dotenv = require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./model/product");

const productJson = require("./products.json");



const start = async ()=>{
    try {
        await connectDB(dotenv.parsed.MONGODB_URL);
        await product.deleteMany();
        await product.create(productJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}
start();