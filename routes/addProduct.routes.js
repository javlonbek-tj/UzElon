const express = require('express');
const isAuth = require('../middleware/is-auth');
const { check } = require('express-validator');

const router = express.Router();

const {
  getAddProduct,
  getFlatCategory,
  getHouseCategory,
  getLandCategory,
  getConstructionCategory,
  getCarCategory,
  getTrackCategory,
  getMotoCategory,
  getNonResidentialCategory,
  getServiceCategory,
  getVacancyCategory,
  getPhoneCategory,
  getLapTopCategory,
  getHouseAppliancesCategory,
  getAnimalCategory,
  postCarAdding,
  postMotoadding,
  postTrackAdding,
  postAnimalAdding,
  postHouseApp,
  postLapTopAdding,
  postPhoneAdding,
  postFlatAdding,
  postHouseAdding,
  postLandAdding,
  postNonResiAdding,
  postConstructionAdding,
  postServiceAdding,
  postVacancyAdding,
} = require('../controllers/addProduct');

router.get('/add-product', isAuth, getAddProduct);
router.get('/flat', getFlatCategory);
router.get('/house', getHouseCategory);
router.get('/land', getLandCategory);
router.get('/nonResidential', getNonResidentialCategory);
router.get('/car', getCarCategory);
router.get('/track', getTrackCategory);
router.get('/moto', getMotoCategory);
router.get('/construction', getConstructionCategory);
router.get('/service', getServiceCategory);
router.get('/vacancy', getVacancyCategory);
router.get('/phone', getPhoneCategory);
router.get('/lap-top', getLapTopCategory);
router.get('/houseAplliances', getHouseAppliancesCategory);
router.get('/animal', getAnimalCategory);
router.post(
  '/adding-car',
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
  postCarAdding,
);
router.post(
  '/adding-moto',
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
  postMotoadding,
);
router.post(
  '/adding-track',
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
  postTrackAdding,
);
router.post(
  '/adding-animal',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('animalName').not().isEmpty(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postAnimalAdding,
);
router.post(
  '/adding-houseApp',
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
  postHouseApp,
);
router.post(
  '/adding-laptop',
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
  postLapTopAdding,
);
router.post(
  '/adding-phone',
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
  postPhoneAdding,
);
router.post(
  '/adding-flat',
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
  postFlatAdding,
);
router.post(
  '/adding-house',
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
  postHouseAdding,
);
router.post(
  '/adding-land',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('area').not().isEmpty().isInt(),
    check('address').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postLandAdding,
);
router.post(
  '/adding-nonResidential',
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
  postNonResiAdding,
);
router.post(
  '/adding-construction',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('serviceType').not().isEmpty(),
    check('experience').not().isEmpty().isInt(),
    check('numWorkers').not().isEmpty().isInt(),
    check('workTime').not().isEmpty(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postConstructionAdding,
);
router.post(
  '/adding-service',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('gender').not().isEmpty(),
    check('experience').not().isEmpty().isInt(),
    check('age').not().isEmpty().isInt(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postServiceAdding,
);
router.post(
  '/adding-vacancy',
  isAuth,
  [
    check('shortInfo').not().isEmpty(),
    check('gender').not().isEmpty(),
    check('position').not().isEmpty(),
    check('age').not().isEmpty().isInt(),
    check('extraInfo').not().isEmpty(),
    check('price').not().isEmpty().isInt(),
    check('phoneNumber').not().isEmpty().isLength(12),
  ],
  postVacancyAdding,
);

module.exports = router;
