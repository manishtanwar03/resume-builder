'use strict'
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        minlength: 5,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    password_reset_otp: {
        type: String,
    },
    password_reset_token_sent_at: {
        type: Date,
    },
    password_token_expired: {
        type: Boolean,
    },
    verification_otp: {
        type: String,
    },
    verification_token_Sent_at: {
        type: Date,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verification_expired: {
        type: Boolean,
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = User;