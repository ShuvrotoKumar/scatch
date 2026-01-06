const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
    bgcolor: String,
    textColor: String,
    panelcolor: String,
});

module.exports = mongoose.model("product", productSchema);