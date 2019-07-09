const express = require('express');
const router = express.Router();
var resume = require('../controllers/resume');
const auth = require('../middleware/auth');


router.route('/', auth).post(resume.addResume);

router.route('/:id', auth).put(resume.updateResume);

router.route('/:id', auth).delete(resume.deleteResume);

module.exports = router;