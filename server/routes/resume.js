const express = require('express');
const router = express.Router();
var resume = require('../controllers/resume');
const auth = require('../middleware/auth');
const User = require('../controllers/user');


router.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("done");
});


router.route('/').post(resume.addResume);
// router.route('/', User.verifyToken).post(resume.addResume);

router.route('/:id', User.verifyToken).put(resume.updateResume);

router.route('/:id', User.verifyToken).delete(resume.deleteResume);

module.exports = router;