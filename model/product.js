const mongoose = require("mongoose");

//Create Schema...
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: [true, "price must be provide"],
    },
    feature: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 4.0,
    },

    createDate:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung", "dell", "hp","wipro","TATA"],
            message:"{VALUE} is not support",
        },
    },
});


module.exports = mongoose.model("product", productSchema);

