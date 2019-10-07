const express = require('express');
const router = express.Router();
const Shared = require('../controllers/share-resume');
const verifyToken = require('../middleware/verifyToken');

router.route('/').get(verifyToken,Shared.getData);
router.route('/share-resume').post(verifyToken,Shared.shareResume);
router.route('/share-resume/:resumeId').get(verifyToken,Shared.getSharedData);
router.route('/share-resume/removePerson').post(verifyToken,Shared.removePerson);

module.exports = router;