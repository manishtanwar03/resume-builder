const User = require('../models/user');
const jwt = require('jsonwebtoken')

async function addUser(req, res) {
    try {
        let user = new User(req.body);
        let result = await user.save();
        let payload = { subject: result._id }
        let token = jwt.sign(payload, 'cGFzc3dvcmRwYXNzd29yZAo') //password*2|b64
        res.send({ token });
    } catch (error) {
        console.log("Error occurrend in addUser ", error);
        res.status(500).send("something went wrong, please try again!!");
    }
}


async function authUser(req, res) {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(`Error occurred in authUser ${error}`)
        } else {
            if (!user) {
                res.status(401).send('invalid email or password')
            } else if (user.password !== userData.password) {
                res.status(401).send('invalid email or password')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'cGFzc3dvcmRwYXNzd29yZAo')
                res.status(200).send({ token })
            }
        }
    })
}


module.exports.addUser = addUser;
module.exports.authUser = authUser;