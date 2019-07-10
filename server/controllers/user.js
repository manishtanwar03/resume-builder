const User = require('../models/user');
const jwt = require('jsonwebtoken')     

async function addUser(req, res) {    //
    try {
        console.log('asda')
        let user = await User.find({email:req.body.email});
        console.log(user)
        if(user.length){
            console.log('exist');
            res.send('already exists');
        }
        else if(user.length == 0){
            console.log('new');            
            let user = new User(req.body);   
            let result = await user.save();
            let payload = { subject: result._id }
            let token = jwt.sign(payload, 'cGFzc3dvcmRwYXNzd29yZAo') //password*2|b64
            res.send({ token });
        }
    } catch (error) {
        console.log("Error occurrend in addUser ", error);
        res.status(500).send("something went wrong, please try again!!");
    }
}


async function authUser(req, res) {    //function used for login
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

function verifyToken(req,res,next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send("Unauthorized access");
    }
    let token =req.headers.authorization.split(' ')[1];
    if(token === null){
        return res.status(401).send("Unauthorized access");
    }
    let payload=jwt.verify(token,'cGFzc3dvcmRwYXNzd29yZAo');
    if(!payload)
    {
        return res.status(401).send("Unauthorized access");
    }
    req.userId=payload.subject
    next()
    
}


module.exports.addUser = addUser;
module.exports.authUser = authUser;
module.exports.verifyToken=verifyToken;