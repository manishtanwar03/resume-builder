const helper = require('../helper/common');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


// signup
async function addUser(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            // if email exists
            res.send('user already exists');
        } else {
            // 1. hashing password
            req.body.password = helper.generateHash(req.body.password)

            // 2. saving document
            let user = new User(req.body);
            let result = await user.save();

            // 3. creating token
            let payload = { subject: result._id }
            let token = helper.generateToken(payload);

            // 4. sending token back
            res.send({ token });
        }
    } catch (error) {
        console.log("Error occurrend in addUser ", error);
        res.status(500).send("something went wrong, please try again!!");
    }
}

//login
async function authUser(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).send("invalid email or password");
        } else {
            let result = await helper.verifyHash(req.body.password, user.password);
            if (result) {
                // if passwords match
                let payload = { subject: user._id }
                let token = helper.generateToken(payload);
                // sending back response
                res.status(200).send({ token })
            } else {
                // if passwords doesn't match
                
                res.status(402).send('invalid email or password')
                
            }
        }
    } catch (error) {
        res.status(500).send("something went wrong, try again!!");
    }
}



module.exports.addUser = addUser;
module.exports.authUser = authUser;