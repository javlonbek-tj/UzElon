const express = require('express');

const router = express.Router();
const { postMakeProductTop, postMakeProductBottom } = require('../controllers/admin');
const { restrictTo } = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');

router.post('/makeProductTop', isAuth, restrictTo('admin'), postMakeProductTop);
router.post('/makeProductBottom', isAuth, restrictTo('admin'), postMakeProductBottom);

module.exports = router;
