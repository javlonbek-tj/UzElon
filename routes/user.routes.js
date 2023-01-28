const express = require('express');

const router = express.Router();

const {
  getAddProduct,
  postAddProduct,
  getFlatCategory,
  getHouseCategory,
  getLandCategory,
  getConstructionCategory,
  getCarCategory,
  getTrackCategory,
  getMotoCategory,
  getResumeCategory,
  getNonResidentialCategory,
  getServiceCategory,
  getPhoneCategory,
  getLapTopCategory,
  getHouseAppliancesCategory,
  getAnimalCategory,
} = require('../controllers/addProduct');

router.get('/add-product', getAddProduct);
router.get('/flat', getFlatCategory);
router.get('/house', getHouseCategory);
router.get('/land', getLandCategory);
router.get('/nonResidential', getNonResidentialCategory);
router.get('/car', getCarCategory);
router.get('/track', getTrackCategory);
router.get('/moto', getMotoCategory);
router.get('/resume', getResumeCategory);
router.get('/construction', getConstructionCategory);
router.get('/service', getServiceCategory);
router.get('/phone', getPhoneCategory);
router.get('/lap-top', getLapTopCategory);
router.get('/houseAplliances', getHouseAppliancesCategory);
router.get('/animal', getAnimalCategory);
router.post('/add-product', postAddProduct);

module.exports = router;
