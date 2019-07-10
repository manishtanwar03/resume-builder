const express = require('express');      //2
const router = express.Router();          //2
const User = require('../controllers/user');


// router.get('/,' (req, res) => 
// {
//   res.send
// })

router.route('/register').  //2. here we define api end points
post(User.addUser);

router.route('/login').
post(User.authUser);




module.exports = router;      //2