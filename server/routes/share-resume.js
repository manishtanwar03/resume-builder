const express = require('express');
const router = express.Router();
const Shared = require('../controllers/share-resume');
const verifyToken = require('../middleware/verifyToken');

router.route('/').get(Shared.getData);
router.route('/share-resume').get().post(verifyToken,Shared.shareResume);

module.exports = router;