'use strict'
'use strict'
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        unique:false
    },
    
    password: {
        type: String,
        required: [true, 'password is required']
    },
    

});

const User_Model = mongoose.model('User',User);
module.exports = User_Model;