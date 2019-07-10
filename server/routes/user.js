const express = require('express');
const router = express.Router();
const User = require('../controllers/user');



router.route('/register').
post(User.addUser);

router.route('/login').
post(User.authUser);


module.exports = router;