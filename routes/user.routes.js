const express = require('express');

const router = express.Router();

const {
  getAddProduct,
  postAddProduct,
  getFlatCategory,
  getHouseCategory,
  getLandCategory,
  getBuildingCategory,
  getCarCategory,
  getTrackCategory,
  getMotoCategory,
  getResumeCategory,
  getHouseBuildCategory,
  getServiceCategory,
} = require('../controllers/userController');

router.get('/add-product', getAddProduct);
router.get('/flat-category', getFlatCategory);
router.get('/house-category', getHouseCategory);
router.get('/land-category', getLandCategory);
router.get('/e-building-category', getBuildingCategory);
router.get('/car-category', getCarCategory);
router.get('/track-category', getTrackCategory);
router.get('/moto-category', getMotoCategory);
router.get('/resume-category', getResumeCategory);
router.get('/house-building-category', getHouseBuildCategory);
router.get('/service-category', getServiceCategory);
router.post('/add-product', postAddProduct);

module.exports = router;
