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
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User_Model = mongoose.model('User', User);
module.exports = User_Model;