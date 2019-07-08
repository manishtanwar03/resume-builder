'use strict'
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        unique:true,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 10,
        maxlength: 40
    },
    
    password: {
        type: String,
        required: true,
        required: true,
        trim: true,
        minlength: 7,
        maxlength: 40
    },
    

});

const User_Model = mongoose.model('User',User);
module.exports = User_Model;