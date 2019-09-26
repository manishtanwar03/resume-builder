// 'use strict'
// const mongoose = require('mongoose');


// const Content = new mongoose.Schema({
//     basicInformation: {
//         firstName: {
//             type: String,
//             required: true,
//             trim: true,
//             lowercase: true,
//         },
//         lastName: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         title: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         pitch: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         phone: {
//             type: Number,
//         },
//         email: {
//             type: String,
//         },

//     },
//     workHistory: [{
//         job_title: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         employer: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         start_day: {
//             type: String,
//         },
//         start_month: {
//             type: String,
//         },
//         start_year: {
//             type: String,
//         },
//         end_day: {
//             type: String,
//         },
//         end_month: {
//             type: String,
//         },
//         end_year: {
//             type: String,
//         },

//         present: {
//             type: Boolean,
//             default: false
//         },
//         description: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         }
//     }],
//     education: [{
//         schoolName: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         location: {
//             type: String,
//             trim: true,
//             lowercase: true
//         },
//         degree: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         year: {
//             type: Number,
//             match: [/^\d{4}$/, 'Please fill a valid year']
//         },
//         description: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         }
//     }],
//     skills: [String],
//     interests: [String],
//     languages: [{
//         language: {
//             type: String,
//             trim: true
//         },
//         value: {
//             type: Number,
//         }

//     }],
//     projects: [{
//         projectTitle: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         },
//         start_day: {
//             type: Number, // date
//         },
//         start_month: {
//             type: Number, // date
//         },
//         start_year: {
//             type: Number, // date,
//         },
//         end_day: {
//             type: Number,
//         },
//         end_month: {
//             type: Number,
//         },
//         end_year: {
//             type: Number,
//         },
//         description: {
//             type: String,
//             trim: true,
//             lowercase: true,
//         }
//     }],
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// });


// const Content_Model = mongoose.model('myContent', Content);
// module.exports = Content_Model;