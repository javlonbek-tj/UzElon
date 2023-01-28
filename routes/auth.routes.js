const express = require('express');

const router = express.Router();

const { getLogin, getSignUp } = require('../controllers/auth');

router.get('/signup', getSignUp);
router.get('/login', getLogin);

module.exports = router;
