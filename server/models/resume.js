'use strict'
const mongoose = require('mongoose');

const Resume = new mongoose.Schema({
    basic_information: {
        firstName: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        lastName: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        title: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        pitch: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 10,
            // maxlength: 50
        },  
        phone: {
            type: Number,
            // required: true,
            // match: [/^\d{10}$/, 'Please fill a valid phone number']
        },
        email: {
            type: String,
            // required: true,
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        
    },
    work_history: [{
        job_title: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        employer: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        start_day: {
            type: Number, // date
            // required: true,
        },
        start_month: {
            type: Number, // date
            // required: true,
        },
        start_year: {
            type: Number, // date
            // required: true,
        },
        end_day: {
            type: Number,
            // required: true
        },
        end_month: {
            type: Number,
            // required: true
        },
        end_year: {
            type: Number,
            // required: true
        },
       
        // present: {
        //     type: Boolean,
        //     default: false
        // },
        description: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 10,
            // maxlength: 200
        }
    }],
    education: [{
        school_name: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 50
        },
        location:{
            type: String,
            trim: true,
            lowercase: true
        },
        degree: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 3,
            // maxlength: 20
        },
        graduation_year: {
            type: Number,
            // required: true,
            // match: [/^\d{4}$/, 'Please fill a valid year']
        },
        description:{
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 10,
            // maxlength: 200
        }
    }],
    skills: [String], //validator required
    interests: [String], // validator required
    languages: [{
        language:{
            type: String,
            // required: true,
            trim: true
        },
        value:{
            type: Number,
            // required: true,
        }
        
    }],
    personal_projects: [{
        project_title: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 10,
            // maxlength: 40
        },
        start_day: {
            type: Number, // date
            // required: true,
        },
        start_month: {
            type: Number, // date
            // required: true,
        },
        start_year: {
            type: Number, // date
            // required: true,
        },
        end_day: {
            type: Number,
            // required: true
        },
        end_month: {
            type: Number,
            // required: true
        },
        end_year: {
            type: Number,
            // required: true
        },
        description: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            // minlength: 10,
            // maxlength: 200
        }
    }],
    // template: {
    //     type: String,
    //     default: "functional",
    //     required:false
    // },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

const Resume_Model = mongoose.model('ResumeDetails', Resume);
module.exports = Resume_Model;