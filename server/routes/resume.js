const express = require('express');
const router = express.Router();
const resume = require('../controllers/resume');
const verifyToken = require('../middleware/verifyToken');


router.route('/').post(verifyToken, resume.addResume);

// router.route('/:id', User.verifyToken).put(resume.updateResume);
// router.route('/:id', User.verifyToken).delete(resume.deleteResume);

module.exports = router;