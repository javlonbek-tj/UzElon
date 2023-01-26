const express = require('express');

const router = express.Router();

const {getAddProduct, postAddProduct, getFlatCategory} = require('../controllers/userController');

router.get('/add-product', getAddProduct);
router.get('/flat-category', getFlatCategory);
router.post('/add-product', postAddProduct);

module.exports = router;