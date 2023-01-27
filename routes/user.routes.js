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
} = require('../controllers/userController');

router.get('/add-product', getAddProduct);
router.get('/flat-category', getFlatCategory);
router.get('/house-category', getHouseCategory);
router.get('/land-category', getLandCategory);
router.get('/e-building-category', getBuildingCategory);
router.get('/car-category', getCarCategory);
router.get('/track-category', getTrackCategory);
router.get('/moto-category', getMotoCategory);
router.post('/add-product', postAddProduct);

module.exports = router;
