const express = require('express');
const router = express.Router();
var resume = require('../controllers/resume');
const auth = require('../middleware/auth');


router.route('/').post(auth, resume.addResume);

router.route(auth, '/:id').put(auth, resume.updateResume);

router.route(auth, '/:id').delete(auth, resume.deleteResume);

module.exports = router;