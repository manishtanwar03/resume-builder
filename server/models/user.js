'use strict'
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
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

    password_reset_otp: {
        type: String,
    },

    verification_otp: {
        type: String,
    },

    verified: {
        type: Boolean,
        default: false,
    },

    created_at: {
        type: Date,
        default: Date.now
    }

});

User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

User.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
}

const User_Model = mongoose.model('User', User);
module.exports = User_Model;