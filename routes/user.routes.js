const express = require('express');

const router = express.Router();

const { getUserProducts, getUserProfile } = require('../controllers/user');

router.get('/products', getUserProducts);
router.get('/profile', getUserProfile);

module.exports = router;
