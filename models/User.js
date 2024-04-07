const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        trim: true
    },
    domain: {
        type: String,
        trim: true
    },
    available: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

