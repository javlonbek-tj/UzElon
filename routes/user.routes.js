const express = require('express');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const { getUserProducts, getUserProfile, postDeleteProduct } = require('../controllers/user');

router.get('/products', isAuth, getUserProducts);
router.get('/profile', isAuth, getUserProfile);
router.post('/delete/product', postDeleteProduct);
/* router.get('/edit-product/:produvtId', isAuth, getEditProduct); */

module.exports = router;
