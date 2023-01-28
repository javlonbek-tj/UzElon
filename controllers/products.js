const Car = require('../models/cars/car.model');

const getHomePage = (req, res, next) => {
  try {
    res.render('products/home', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = (req, res, next) => {
  try {
    res.render('products/product-detail', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllProducts = (req, res, next) => {
  try {
    res.render('products/products', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getHomePage,
  getOneProduct,
  getAllProducts,
};
