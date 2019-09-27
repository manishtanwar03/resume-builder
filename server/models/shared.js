'use strict'
const mongoose = require('mongoose');

const Shared = new mongoose.Schema({
    resume:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ResumeDetails',
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    shared_with:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    private_link:{
        type:String,
        default:""
    },
    is_public_active:{
        type:Boolean,
        default:false
    },
    public_link:{
        type:String,
        default:""
    },
});

const Shared_Model = mongoose.model('Shared', Shared);
module.exports = Shared_Model;