const express = require('express');
const router = express.Router();
const Shared = require('../controllers/share-resume');

router.route('/').get(Shared.getData);

module.exports = router;