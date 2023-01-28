const express = require('express');

const router = express.Router();

const { getHomePage, getOneProduct, getAllProducts } = require('../controllers/products');

router.get('/', getHomePage);
router.get('/products', getAllProducts);
router.get('/product-detail', getOneProduct);

module.exports = router;
