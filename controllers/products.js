const General = require('../models/general.model');
const Flat = require('../models/home/flat.model');
const House = require('../models/home/house.model');
const Land = require('../models/home/land.model');
const NonResidential = require('../models/home/nonResidential.model');
const Car = require('../models/cars/car.model');
const Track = require('../models/cars/track.model');
const Moto = require('../models/cars/moto.model');
const Construction = require('../models/jobs/construction.model');
const Service = require('../models/jobs/service.model');
const Vacancy = require('../models/jobs/vacancy.model');
const Phone = require('../models/electronics/phone.model');
const LapTop = require('../models/electronics/lap-top.model');
const HouseAppliances = require('../models/electronics/houseAppliances.model');
const Animal = require('../models/electronics/animal.model');

const getHomePage = async (req, res, next) => {
  try {
    const prods = await General.find();
    res.render('products/home', {
      pageTitle: 'AvtoVodil',
      prods,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    if (await Flat.findById(prodId)) {
      const flat = await Flat.findById(prodId);
      return res.render('products/product-flat', {
        pageTitle: 'Kvartira',
        flat,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    const prods = await General.find();
    res.render('products/products', {
      pageTitle: 'AvtoVodil',
      prods,
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
