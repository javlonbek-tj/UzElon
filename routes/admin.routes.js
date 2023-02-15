const express = require('express');

const router = express.Router();
const { postMakeProductTop } = require('../controllers/admin');

router.post('/makeProductTop', postMakeProductTop);

module.exports = router;
