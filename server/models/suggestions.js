'use strict'
const mongoose = require('mongoose');

const Suggestion = new mongoose.Schema({
    resume : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ResumeDetails',
        required:true
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    suggestions:{
        basicInformation:{
            type:String,
            trim:true,
        },
        workHistory:{
            type:String,
            trim:true
        },
        educations:{
            type:String,
            trim:true
        },
        skills:{
            type:String,
            trim:true
        },
        interests:{
            type:String,
            trim:true
        },
        languages:{
            type:String,
            trim:true,
        },
        projects:{
            type:String,
            trim:true,
        },
    },
    remark:{
        type:String,
        trim:true
    }
});

const Suggestion_Model = mongoose.model('suggestion',Suggestion);
module.exports = Suggestion_Model;