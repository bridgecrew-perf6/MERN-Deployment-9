const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"The Name is required"],
        minlength: [3,"The Name must be at least 3 characters long"]
    },
    quote: {
        type: String,
        required: [true,"The quote is required"],
        minlength: [3,"The quote must be at least 3 characters long"]
    }
},{ timestamps: true });

const Author = mongoose.model("Autores", AuthorSchema);

module.exports = {Author};