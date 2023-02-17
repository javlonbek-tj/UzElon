const express = require('express');

const router = express.Router();
const { postMakeProductTop, postMakeProductBottom } = require('../controllers/admin');

router.post('/makeProductTop', postMakeProductTop);
router.post('/makeProductBottom', postMakeProductBottom);

module.exports = router;
