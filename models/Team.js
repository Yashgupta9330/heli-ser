const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    TeamName: {
        type: String,
        required: true,
        trim: true
    },
    Members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // References the User model
    }]
});

module.exports = mongoose.model('Team', teamSchema);
