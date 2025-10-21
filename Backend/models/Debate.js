const mongoose = require("mongoose");

const debateSchema = new mongoose.Schema({
    topic : String,
    optionA : String,
    optionB : String,
    votesA : Number,
    votesB : Number,
});

module.exports = mongoose.model("Debate" , debateSchema);   