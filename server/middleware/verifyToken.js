const helper = require('../helper/common');
const User = require('../models/user');


async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {
             res.status(401).send("unauthorized access");
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === null) {
             res.status(402).send("unauthorized access");
        }
        let payload = helper.verifyToken(token);
        if (!payload) {
             res.status(403).send("unauthorized access");
        }
        let user = !!await User.findOne({ _id: payload.subject });
        if (user) {
            req.body.user = payload.subject; // setting user id
            console.log(req.body.user);
            next();
        }
         else{
             res.status(404).send('unauthorized access');
         }
    } catch (error) {
        console.log("Error occurred in middleware ", error);
         res.status(500).send("something went wrong");
    }
}

module.exports = verifyToken;