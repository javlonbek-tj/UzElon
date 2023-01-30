const express = require('express');

const router = express.Router();

const { getUserProducts } = require('../controllers/user');

router.get('/products', getUserProducts);

module.exports = router;
