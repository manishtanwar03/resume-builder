'use strict'
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 40
    },
});

const User_Model = mongoose.model('User', User);
module.exports = User_Model;