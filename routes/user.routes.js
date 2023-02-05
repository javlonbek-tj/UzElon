const express = require('express');
const isAuth = require('../middleware/is-auth');
const { check } = require('express-validator');

const router = express.Router();

const {
  getUserProducts,
  getUserProfile,
  getEditProduct,
  postDeleteProduct,
  postEditCar,
  postEditTrack,
  postEditMoto,
  postEditFlat,
  postEditHouse,
  postEditLand,
  postEditNonResidential,
  postEditAnimal,
  postEditLapTop,
  postEditPhone,
  postEditHouseApp,
  postEditConstruction,
  postEditService,
  postEditVacancy,
} = require('../controllers/user');

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

router.post(
  '/edit-moto',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('model').not().isEmpty(),
    check('motoCondition').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditMoto,
);
router.post(
  '/edit-track',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('model').not().isEmpty(),
    check('fluel').not().isEmpty(),
    check('color').not().isEmpty(),
    check('year').not().isEmpty().isInt().isLength(4),
    check('kmRun').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditTrack,
);
router.post(
  '/edit-animal',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('animalName').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditAnimal,
);
router.post(
  '/edit-houseApp',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('applianceName').not().isEmpty(),
    check('applianceCondition').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditHouseApp,
);
router.post(
  '/edit-laptop',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('mark').not().isEmpty(),
    check('lapTopCondition').not().isEmpty(),
    check('cpu').not().isEmpty(),
    check('ram').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditLapTop,
);
router.post(
  '/edit-phone',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('mark').not().isEmpty(),
    check('model').not().isEmpty(),
    check('phoneCondition').not().isEmpty(),
    check('memory').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditPhone,
);
router.post(
  '/edit-flat',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('rooms').not().isEmpty().isInt(),
    check('floors').not().isEmpty().isInt(),
    check('floor').not().isEmpty().isInt(),
    check('area').not().isEmpty().isInt(),
    check('flatCondition').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditFlat,
);
router.post(
  '/edit-house',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('rooms').not().isEmpty().isInt(),
    check('area').not().isEmpty().isInt(),
    check('houseCondition').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditHouse,
);
router.post(
  '/edit-land',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('area').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditLand,
);
router.post(
  '/edit-nonResidential',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('rooms').not().isEmpty().isInt(),
    check('area').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditNonResidential,
);
router.post(
  '/edit-construction',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('serviceType').not().isEmpty(),
    check('experience').not().isEmpty().isInt(),
    check('numWorkers').not().isEmpty().isInt(),
    check('workTime').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditConstruction,
);
router.post(
  '/edit-service',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('gender').not().isEmpty(),
    check('serviceType').not().isEmpty(),
    check('experience').not().isEmpty().isInt(),
    check('age').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditService,
);
router.post(
  '/edit-vacancy',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('gender').not().isEmpty(),
    check('position').not().isEmpty(),
    check('age').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postEditVacancy,
);

module.exports = router;
