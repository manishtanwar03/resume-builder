'use strict'
const mongoose = require('mongoose');

const Shared = new mongoose.Schema({
    resume:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Resume'
    },
    shared_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    shared_with:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    is_public:{
        type:Boolean,
        default:false
    },
    link:{
        type:String,
    },
});

const Shared_Model = mongoose.model('Shared', Shared);
module.exports = Shared_Model;