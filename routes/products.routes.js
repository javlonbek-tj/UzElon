const express = require('express');

const router = express.Router();

const { getHomePage, getOneProduct, getAllProducts, getAuthorProducts } = require('../controllers/products');

router.get('/', getHomePage);
router.get('/products', getAllProducts);
router.get('/products/:productId', getOneProduct);
router.get('/author/products/:authorId', getAuthorProducts);

module.exports = router;
