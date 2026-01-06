const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,  
    picture: String,
    gstin: String,
    phone: String,
    address: String,
});

module.exports = mongoose.model("owner", userSchema);