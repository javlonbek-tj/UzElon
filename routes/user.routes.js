const express = require('express');
const isAuth = require('../middleware/is-auth');
const { check } = require('express-validator');

const router = express.Router();

const { getUserProducts, getUserProfile, getEditProduct, postDeleteProduct, postEditCar } = require('../controllers/user');

router.get('/products', isAuth, getUserProducts);
router.get('/profile', isAuth, getUserProfile);
router.post('/delete/product', isAuth, postDeleteProduct);
router.get('/edit-product/:productId', isAuth, getEditProduct);
router.post(
  '/edit-car',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('model').not().isEmpty(),
    check('transmission').not().isEmpty(),
    check('fluel').not().isEmpty(),
    check('color').not().isEmpty(),
    check('year').not().isEmpty().isInt().isLength(4),
    check('address').not().isEmpty(),
    check('kmRun').not().isEmpty().isInt(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditCar,
);

module.exports = router;
