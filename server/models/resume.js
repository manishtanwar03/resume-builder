'use strict'
const mongoose = require('mongoose');

const Resume = new mongoose.Schema({
    basic_information: {
        firstname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        address: {
            street: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
                minlength: 3,
                maxlength: 20
            },
            city: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
                minlength: 3,
                maxlength: 20
            },
            state: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
                minlength: 3,
                maxlength: 20
            },
            pincode: {
                type: Number,
                required: true,
                min: 100000,
                max: 999999
            }
        },
        phone: {
            type: Number,
            required: true,
            match: [/^\d{10}$/, 'Please fill a valid phone number']
        },
        email: {
            type: String,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        summary: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 10,
            maxlength: 50
        },
        image: {
            type: String,
        }
    },
    work_history: [{
        job_title: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        company: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        city: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        state: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        start_date: {
            type: String,
            required: true,
        },
        end_date: {
            type: String,
            required: false,
            // validator remaining
        },
        present: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 10,
            maxlength: 200
        }
    }],
    education: [{
        school_name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 50
        },
        degree: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        graduation_year: {
            type: Number,
            required: true,
            match: [/^\d{4}$/, 'Please fill a valid year']
        }
    }],
    skills: [String], //validator required
    interests: [String], // validator required
    languages: [String],
    personal_projects: [{
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 10,
            maxlength: 40
        },
        start_date: {
            type: String, // date
            required: true,
        },
        end_date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 10,
            maxlength: 200
        }
    }],
    template: {
        type: String,
        default: "functional"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Resume_Model = mongoose.model('ResumeDetails', Resume);
module.exports = Resume_Model;