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
const AppError = require('../utils/appError');

const getUserProducts = async (req, res, next) => {
  try {
    const products = await General.find({ userId: req.user._id });
    const prods = products.map(p => {
      p.price = p.price.toLocaleString('fr');
      return p;
    });
    res.render('user/userProducts', {
      pageTitle: `Mening e'lonlarim`,
      prods,
    });
  } catch (err) {
    console.log(err);
  }
};

const postDeleteProduct = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const deletedProd = await General.findByIdAndRemove(prodId);
    const prodType = deletedProd.productType;
    if (prodType === 'flat') {
      await Flat.findByIdAndRemove(prodId);
    }
    if (prodType === 'house') {
      await House.findByIdAndRemove(prodId);
    }
    if (prodType === 'land') {
      await Land.findByIdAndRemove(prodId);
    }
    if (prodType === 'nonResidential') {
      await NonResidential.findByIdAndRemove(prodId);
    }
    if (prodType === 'car') {
      await Car.findByIdAndRemove(prodId);
    }
    if (prodType === 'track') {
      await Track.findByIdAndRemove(prodId);
    }
    if (prodType === 'moto') {
      await Moto.findByIdAndRemove(prodId);
    }
    if (prodType === 'construction') {
      await Construction.findByIdAndRemove(prodId);
    }
    if (prodType === 'service') {
      await Service.findByIdAndRemove(prodId);
    }
    if (prodType === 'vacancy') {
      await Vacancy.findByIdAndRemove(prodId);
    }
    if (prodType === 'phone') {
      await Phone.findByIdAndRemove(prodId);
    }
    if (prodType === 'laptop') {
      await LapTop.findByIdAndRemove(prodId);
    }
    if (prodType === 'houseAppliances') {
      await HouseAppliances.findByIdAndRemove(prodId);
    }
    if (prodType === 'animal') {
      await Animal.findByIdAndRemove(prodId);
    }
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    res.render('user/profile', {
      pageTitle: `Mening Profilim`,
    });
  } catch (err) {
    console.log(err);
  }
};

/* const getEditProduct = async (req, res, next) => {
  try {
    const { editMode, productType } = req.query;
    const prodId = req.params.productId;
    if (!editMode) {
      return new AppError(`E'lonni o'zgartirishda xotlik topildi. Iltimos qaytadan urinib koring`, 400);
    }
    if(productType == 'car') {
      const car = await Car.findById(prodId);
      if(!car) {
        return new AppError(`E'lonni o'zgartirishda xotlik topildi. Iltimos qaytadan urinib koring`, 400);
      }
      res.redirect('cars/car', {

      });
    }
  } catch (err) {
    console.log(err);
  }
}; */

module.exports = {
  getUserProducts,
  getUserProfile,
  postDeleteProduct,
  /* getEditProduct, */
};
