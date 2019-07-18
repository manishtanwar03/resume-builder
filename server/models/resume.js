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
        },
        end_year: {
            type: String,
        },

        present: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
        }
    }],
    education: [{
        schoolName: {
            type: String,
            trim: true,
            lowercase: true,
        },
        location: {
            type: String,
            trim: true,
            lowercase: true
        },
        degree: {
            type: String,
            trim: true,
            lowercase: true,
        },
        year: {
            type: Number,
            match: [/^\d{4}$/, 'Please fill a valid year']
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
        }
    }],
    skills: [String], //validator required
    interests: [String], // validator required
    languages: [{
        language: {
            type: String,
            trim: true
        },
        value: {
            type: Number,
        }

    }],
    projects: [{
        projectTitle: {
            type: String,
            trim: true,
            lowercase: true,
        },
        start_day: {
            type: Number, // date
        },
        start_month: {
            type: Number, // date
        },
        start_year: {
            type: Number, // date,
        },
        end_day: {
            type: Number,
        },
        end_month: {
            type: Number,
        },
        end_year: {
            type: Number,
        },
        description: {
            type: String,
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
    filter: {},
    template: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Resume_Model = mongoose.model('ResumeDetails', Resume);
module.exports = Resume_Model;