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
const { validationResult } = require('express-validator');

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

const getEditProduct = async (req, res, next) => {
  try {
    const { edit, productType } = req.query;
    const prodId = req.params.productId;
    if (!edit) {
      return new AppError(
        `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
        400,
      );
    }
    if (productType == 'car') {
      const car = await Car.findById(prodId);
      if (!car) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      const year = car.year.getFullYear();
      res.render('cars/car', {
        pageTitle: 'Add product',
        product: car,
        year,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'moto') {
      const moto = await Moto.findById(prodId);
      if (!moto) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('cars/moto', {
        pageTitle: 'Add product',
        product: moto,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'track') {
      const track = await Track.findById(prodId);
      if (!track) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      const year = track.year.getFullYear();
      res.render('cars/track', {
        pageTitle: 'Add product',
        product: track,
        year,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'animal') {
      const animal = await Animal.findById(prodId);
      if (!animal) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('electronics/animal', {
        pageTitle: 'Add product',
        product: animal,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'houseAppliances') {
      const houseAppliances = await HouseAppliances.findById(prodId);
      if (!houseAppliances) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('electronics/houseAppliances', {
        pageTitle: 'Add product',
        product: houseAppliances,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'laptop') {
      const laptop = await LapTop.findById(prodId);
      if (!laptop) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('electronics/lap-top', {
        pageTitle: 'Add product',
        product: laptop,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'phone') {
      const phone = await Phone.findById(prodId);
      if (!phone) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('electronics/phone', {
        pageTitle: 'Add product',
        product: phone,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'flat') {
      const flat = await Flat.findById(prodId);
      if (!flat) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('estate/flat', {
        pageTitle: 'Add product',
        product: flat,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'house') {
      const house = await House.findById(prodId);
      if (!house) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('estate/house', {
        pageTitle: 'Add product',
        product: house,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'land') {
      const land = await Land.findById(prodId);
      if (!land) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('estate/land', {
        pageTitle: 'Add product',
        product: land,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'nonResidential') {
      const nonResidential = await NonResidential.findById(prodId);
      if (!nonResidential) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('estate/nonResidential', {
        pageTitle: 'Add product',
        product: nonResidential,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'service') {
      const service = await Service.findById(prodId);
      if (!service) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('jobs/service', {
        pageTitle: 'Add product',
        product: service,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'vacancy') {
      const vacancy = await Vacancy.findById(prodId);
      console.log(vacancy);
      if (!vacancy) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('jobs/vacancy', {
        pageTitle: 'Add product',
        product: vacancy,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'construction') {
      const construction = await Construction.findById(prodId);
      if (!construction) {
        return new AppError(
          `E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`,
          400,
        );
      }
      res.render('jobs/construction', {
        pageTitle: 'Add product',
        product: construction,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const postEditCar = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const {
      shortInfo,
      model,
      transmission,
      fluel,
      color,
      year,
      kmRun,
      address,
      extraInfo,
      price,
      phoneNumber,
      rentOrSell,
      productId,
    } = req.body;
    if (!errors.isEmpty()) {
      return res.render('cars/car', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          model,
          transmission,
          fluel,
          color,
          year,
          kmRun,
          address,
          extraInfo,
          price,
          phoneNumber,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const oldCar = await Car.findById(productId);
    oldCar.shortInfo = shortInfo;
    oldCar.model = model;
    oldCar.transmission = transmission;
    oldCar.fluel = fluel;
    oldCar.color = color;
    oldCar.year = year;
    oldCar.kmRun = kmRun;
    oldCar.address = address;
    oldCar.extraInfo = extraInfo;
    oldCar.price = price;
    oldCar.phoneNumber = phoneNumber;
    if (oldCar.rentOrSell) {
      oldCar.rentOrSell = rentOrSell;
    }
    const updatedCar = await oldCar.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral._id = updatedCar._id),
      (oldGeneral.shortInfo = updatedCar.shortInfo),
      (oldGeneral.price = updatedCar.price),
      (oldGeneral.address = updatedCar.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserProducts,
  getUserProfile,
  postDeleteProduct,
  getEditProduct,
  postEditCar,
};
