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
const deleteFile = require('../utils/deleteFile');

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
      const removedProd = await Flat.findByIdAndRemove(prodId);
      deleteFile(removedProd.imageUrl);
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
      const removedProd = await Car.findByIdAndRemove(prodId);
      deleteFile(removedProd.imageUrl);
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
      return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
    }
    if (productType == 'car') {
      const car = await Car.findById(prodId);
      if (!car) {
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
      }
      const product = { ...car._doc };
      product.year = car._doc.year.getFullYear();
      res.render('cars/car', {
        pageTitle: 'Add product',
        product,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'moto') {
      const moto = await Moto.findById(prodId);
      if (!moto) {
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
      }
      const product = { ...track._doc };
      product.year = track._doc.year.getFullYear();
      res.render('cars/track', {
        pageTitle: 'Add product',
        product,
        validationErrors: [],
        editing: edit,
        hasError: false,
      });
    }
    if (productType == 'animal') {
      const animal = await Animal.findById(prodId);
      if (!animal) {
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
      if (!vacancy) {
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
        return new AppError(`E'lonni o'zgartirishda xatolik topildi. Iltimos qaytadan urinib koring`, 400);
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
    const { shortInfo, model, transmission, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber, rentOrSell, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
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
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
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
    (oldGeneral.shortInfo = updatedCar.shortInfo),
      (oldGeneral.price = updatedCar.price),
      (oldGeneral.address = updatedCar.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditMoto = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { rentOrSell, shortInfo, model, motoCondition, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('cars/moto', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          model,
          motoCondition,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: ftrue,
        hasError: true,
      });
    }
    const oldMoto = await Moto.findById(productId);
    oldMoto.shortInfo = shortInfo;
    oldMoto.model = model;
    oldMoto.motoCondition = motoCondition;
    oldMoto.address = address;
    oldMoto.extraInfo = extraInfo;
    oldMoto.price = price;
    oldMoto.phoneNumber = phoneNumber;
    const updatedMoto = await oldMoto.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedMoto.shortInfo),
      (oldGeneral.price = updatedMoto.price),
      (oldGeneral.address = updatedMoto.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditTrack = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { rentOrSell, shortInfo, model, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('cars/track', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          model,
          fluel,
          color,
          year,
          kmRun,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldTrack = await Track.findById(productId);
    oldTrack.shortInfo = shortInfo;
    oldTrack.model = model;
    oldTrack.fluel = fluel;
    oldTrack.color = color;
    oldTrack.year = year;
    oldTrack.kmRun = kmRun;
    oldTrack.address = address;
    oldTrack.extraInfo = extraInfo;
    oldTrack.price = price;
    oldTrack.phoneNumber = phoneNumber;
    if (oldTrack.rentOrSell) {
      oldTrack.rentOrSell = rentOrSell;
    }
    const updatedTrack = await oldTrack.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedTrack.shortInfo),
      (oldGeneral.price = updatedTrack.price),
      (oldGeneral.address = updatedTrack.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditAnimal = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, animalName, address, price, extraInfo, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('electronics/animal', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          animalName,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldAnimal = await Animal.findById(productId);
    oldAnimal.shortInfo = shortInfo;
    oldAnimal.address = address;
    oldAnimal.extraInfo = extraInfo;
    oldAnimal.price = price;
    oldAnimal.phoneNumber = phoneNumber;

    const updatedAnimal = await oldAnimal.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedAnimal.shortInfo),
      (oldGeneral.price = updatedAnimal.price),
      (oldGeneral.address = updatedAnimal.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditHouseApp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, applianceName, applianceCondition, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('electronics/houseAppliances', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          applianceName,
          applianceCondition,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldHouseApp = await HouseAppliances.findById(productId);
    oldHouseApp.shortInfo = shortInfo;
    oldHouseApp.applianceName = applianceName;
    oldHouseApp.applianceCondition = applianceCondition;
    oldHouseApp.address = address;
    oldHouseApp.extraInfo = extraInfo;
    oldHouseApp.price = price;
    oldHouseApp.phoneNumber = phoneNumber;
    const updatedHouseApp = await oldHouseApp.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedHouseApp.shortInfo),
      (oldGeneral.price = updatedHouseApp.price),
      (oldGeneral.address = updatedHouseApp.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditLapTop = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, mark, lapTopCondition, cpu, ram, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('electronics/lap-top', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          mark,
          lapTopCondition,
          cpu,
          ram,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldLapTop = await LapTop.findById(productId);
    oldLapTop.shortInfo = shortInfo;
    oldLapTop.mark = mark;
    oldLapTop.lapTopCondition = lapTopCondition;
    oldLapTop.address = address;
    oldLapTop.extraInfo = extraInfo;
    oldLapTop.price = price;
    oldLapTop.phoneNumber = phoneNumber;
    const updatedHouseApp = await oldLapTop.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedHouseApp.shortInfo),
      (oldGeneral.price = updatedHouseApp.price),
      (oldGeneral.address = updatedHouseApp.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditPhone = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, mark, model, phoneCondition, memory, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('electronics/phone', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          mark,
          model,
          phoneCondition,
          memory,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldPhone = await Phone.findById(productId);
    oldPhone.shortInfo = shortInfo;
    oldPhone.mark = mark;
    oldPhone.model = model;
    oldPhone.phoneCondition = phoneCondition;
    oldPhone.memory = memory;
    oldPhone.address = address;
    oldPhone.extraInfo = extraInfo;
    oldPhone.price = price;
    oldPhone.phoneNumber = phoneNumber;

    const updatedPhone = await oldPhone.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedPhone.shortInfo),
      (oldGeneral.price = updatedPhone.price),
      (oldGeneral.address = updatedPhone.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditFlat = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const flatHas = [];
    const {
      rentOrSell,
      shortInfo,
      rooms,
      floors,
      floor,
      area,
      flatCondition,
      address,
      extraInfo,
      price,
      phoneNumber,
      productId,
      airConditioning,
      freeze,
      furniture,
      tv,
      washing,
    } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('estate/flat', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          rooms,
          floors,
          floor,
          area,
          flatCondition,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    if (airConditioning) {
      flatHas.push(airConditioning);
    }
    if (freeze) {
      flatHas.push(freeze);
    }
    if (furniture) {
      flatHas.push(furniture);
    }
    if (tv) {
      flatHas.push(tv);
    }
    if (washing) {
      flatHas.push(washing);
    }
    const oldFlat = await Flat.findById(productId);
    oldFlat.shortInfo = shortInfo;
    oldFlat.rooms = rooms;
    oldFlat.floors = floors;
    oldFlat.flatCondition = flatCondition;
    oldFlat.address = address;
    oldFlat.extraInfo = extraInfo;
    oldFlat.price = price;
    oldFlat.phoneNumber = phoneNumber;
    if (oldFlat.rentOrSell) {
      oldFlat.rentOrSell = rentOrSell;
    }
    const updatedFlat = await oldFlat.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedFlat.shortInfo),
      (oldGeneral.price = updatedFlat.price),
      (oldGeneral.address = updatedFlat.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};
const postEditHouse = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const houseHas = [];
    const { rentOrSell, shortInfo, rooms, area, houseCondition, address, extraInfo, price, phoneNumber, gas, electricity, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('estate/house', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          rooms,
          area,
          houseCondition,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    if (gas) {
      houseHas.push(gas);
    }
    if (electricity) {
      houseHas.push(electricity);
    }
    const oldHouse = await House.findById(productId);
    oldHouse.shortInfo = shortInfo;
    oldHouse.rooms = rooms;
    oldHouse.area = area;
    oldHouse.houseCondition = houseCondition;
    oldHouse.address = address;
    oldHouse.extraInfo = extraInfo;
    oldHouse.price = price;
    oldHouse.phoneNumber = phoneNumber;
    if (oldHouse.rentOrSell) {
      oldHouse.rentOrSell = rentOrSell;
    }
    const updatedHouse = await oldHouse.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedHouse.shortInfo),
      (oldGeneral.price = updatedHouse.price),
      (oldGeneral.address = updatedHouse.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};
const postEditLand = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const landHas = [];
    const { rentOrSell, shortInfo, area, address, price, extraInfo, phoneNumber, gas, electricity, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('estate/land', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          area,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    if (gas) {
      landHas.push(gas);
    }
    if (electricity) {
      landHas.push(electricity);
    }
    const oldLand = await Land.findById(productId);
    oldLand.shortInfo = shortInfo;
    oldLand.area = area;
    oldLand.address = address;
    oldLand.extraInfo = extraInfo;
    oldLand.price = price;
    oldLand.phoneNumber = phoneNumber;
    if (oldLand.rentOrSell) {
      oldLand.rentOrSell = rentOrSell;
    }
    const updatedLand = await oldLand.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedLand.shortInfo),
      (oldGeneral.price = updatedLand.price),
      (oldGeneral.address = updatedLand.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditNonResidential = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const buildingHas = [];
    const { shortInfo, rentOrSell, rooms, area, address, price, extraInfo, phoneNumber, gas, electricity, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('estate/nonResidential', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          rooms,
          area,
          address,
          price,
          extraInfo,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    if (gas) {
      buildingHas.push(gas);
    }
    if (electricity) {
      buildingHas.push(electricity);
    }
    const oldNonResi = await NonResidential.findById(productId);
    oldNonResi.shortInfo = shortInfo;
    oldNonResi.rooms = rooms;
    oldNonResi.area = area;
    oldNonResi.address = address;
    oldNonResi.extraInfo = extraInfo;
    oldNonResi.price = price;
    oldNonResi.phoneNumber = phoneNumber;
    if (oldNonResi.rentOrSell) {
      oldNonResi.rentOrSell = rentOrSell;
    }
    const updatedNonResi = await oldNonResi.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedNonResi.shortInfo),
      (oldGeneral.price = updatedNonResi.price),
      (oldGeneral.address = updatedNonResi.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditConstruction = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, serviceType, experience, numWorkers, workTime, extraInfo, address, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('jobs/construction', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          serviceType,
          experience,
          numWorkers,
          workTime,
          extraInfo,
          address,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldConstruction = await Construction.findById(productId);
    oldConstruction.shortInfo = shortInfo;
    oldConstruction.serviceType = serviceType;
    oldConstruction.experience = experience;
    oldConstruction.numWorkers = numWorkers;
    oldConstruction.workTime = workTime;
    oldConstruction.address = address;
    oldConstruction.extraInfo = extraInfo;
    oldConstruction.phoneNumber = phoneNumber;

    const updatedConstruction = await oldConstruction.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedConstruction.shortInfo), (oldGeneral.address = updatedConstruction.address), await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, gender, serviceType, experience, age, address, extraInfo, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('jobs/service', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          gender,
          serviceType,
          experience,
          age,
          address,
          extraInfo,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldService = await Service.findById(productId);
    oldService.shortInfo = shortInfo;
    oldService.gender = gender;
    oldService.serviceType = serviceType;
    oldService.experience = experience;
    oldService.age = age;
    oldService.address = address;
    oldService.extraInfo = extraInfo;
    oldService.phoneNumber = phoneNumber;

    const updatedService = await oldService.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedService.shortInfo),
      (oldGeneral.price = updatedService.price),
      (oldGeneral.address = updatedService.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditVacancy = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const { shortInfo, gender, position, requiredAge, address, extraInfo, price, phoneNumber, productId } = req.body;
    if (!errors.isEmpty()) {
      const _id = productId;
      return res.render('jobs/vacancy', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          gender,
          position,
          requiredAge,
          address,
          extraInfo,
          price,
          phoneNumber,
          _id,
        },
        validationErrors: errors.array(),
        editing: true,
        hasError: true,
      });
    }
    const oldVacancy = await Vacancy.findById(productId);
    oldVacancy.shortInfo = shortInfo;
    oldVacancy.gender = gender;
    oldVacancy.position = position;
    oldVacancy.requiredAge = requiredAge;
    oldVacancy.address = address;
    oldVacancy.extraInfo = extraInfo;
    oldVacancy.price = price;
    oldVacancy.phoneNumber = phoneNumber;

    const updatedVacancy = await oldVacancy.save();
    const oldGeneral = await General.findById(productId);
    (oldGeneral.shortInfo = updatedVacancy.shortInfo),
      (oldGeneral.price = updatedVacancy.price),
      (oldGeneral.address = updatedVacancy.address),
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
};
