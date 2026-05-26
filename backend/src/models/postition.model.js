const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    avg: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },net: {
        type: String,
        required: true
    },
    day: {
        type: String,
    } , isLoss: {
        type: Boolean,
    }      
});

const positionModel = mongoose.model('position', positionSchema);    
module.exports = positionModel;