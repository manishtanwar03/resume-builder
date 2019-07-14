const express = require('express');
const router = express.Router();
const resume = require('../controllers/resume');
const verifyToken = require('../middleware/verifyToken');


router.route('/').
post(verifyToken, resume.addResume).
get(verifyToken, resume.loadAllResume);

router.route('/:id').
get(verifyToken, resume.loadResume).
put(resume.updateResume).
delete(verifyToken, resume.deleteResume);


module.exports = router;