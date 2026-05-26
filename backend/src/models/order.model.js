const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({  

    name: { 
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        required: true
    },

});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;