const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../controllers/user');

router.get('/', (req,res) => {
res.send('From API route');    
})
// router.route('/:id').
// put(User.updateUser);

router.route('/:id').
delete(User.deleteUser);


router.route('/register').
post(User.addUser);

router.route('/login').
post(User.authUser);

router.route('/:id').
delete(User.deleteUser);



module.exports = router;