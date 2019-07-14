'use strict'
const mongoose = require('mongoose');

const Resume = new mongoose.Schema({
    basicInformation: {
        firstName: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        lastName: {
            type: String,
            trim: true,
            lowercase: true,
        },
        title: {
            type: String,
            trim: true,
            lowercase: true,
        },
        pitch: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: Number,
        },
        email: {
            type: String,
        },

    },
    workHistory: [{
        job_title: {
            type: String,
            trim: true,
            lowercase: true,
        },
        employer: {
            type: String,
            trim: true,
            lowercase: true,
        },
        start_day: {
            type: String, // date
        },
        start_month: {
            type: String, // date
        },
        start_year: {
            type: String, // date
        },
        end_day: {
            type: String,
        },
        end_month: {
            type: String,
            required: true
        },
        end_year: {
            type: String,
            required: true
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
        location: {
            type: String,
            trim: true,
            lowercase: true
        },
        degree: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20
        },
        year: {
            type: Number,
            required: true,
            match: [/^\d{4}$/, 'Please fill a valid year']
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
    skills: [String], //validator required
    interests: [String], // validator required
    languages: [{
        language: {
            type: String,
            required: true,
            trim: true
        },
        value: {
            type: Number,
            required: true,
        }

    }],
    projects: [{
        projectTitle: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minlength: 10,
            maxlength: 40
        },
        start_day: {
            type: Number, // date
            required: true,
        },
        start_month: {
            type: Number, // date
            required: true,
        },
        start_year: {
            type: Number, // date
            required: true,
        },
        end_day: {
            type: Number,
            required: true
        },
        end_month: {
            type: Number,
            required: true
        },
        end_year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        }
    }],
    is_deleted: {
        type: Boolean,
        default: false
    },
    modified_on: {
        type: Date,
        default: Date.now
    },
    filter: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Resume_Model = mongoose.model('ResumeDetails', Resume);
module.exports = Resume_Model;