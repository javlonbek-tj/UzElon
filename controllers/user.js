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
const { deleteFile, deleteFiles } = require('../utils/deleteFile');

const getUserProducts = async (req, res, next) => {
  try {
    const prods = await General.find().lean();
    prods.map(p => {
      p.price = p.price.toLocaleString('fr');
      p.createdAt = p.createdAt.toLocaleString('en-GB');
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
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'house') {
      const removedProd = await House.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'land') {
      const removedProd = await Land.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'nonResidential') {
      const removedProd = await NonResidential.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'car') {
      const removedProd = await Car.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'track') {
      const removedProd = await Track.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'moto') {
      const removedProd = await Moto.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'construction') {
      const removedProd = await Construction.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'service') {
      const removedProd = await Service.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'vacancy') {
      const removedProd = await Vacancy.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'phone') {
      const removedProd = await Phone.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'laptop') {
      const removedProd = await LapTop.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'houseAppliances') {
      const removedProd = await HouseAppliances.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
    }
    if (prodType === 'animal') {
      const removedProd = await Animal.findByIdAndRemove(prodId);
      if (removedProd.imageUrl.length >= 2) {
        deleteFiles(removedProd.imageUrl);
      } else {
        deleteFile(removedProd.imageUrl[0]);
      }
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

function getImageUrl(images) {
  const imageUrl = [];
  let image1;
  let image2;
  let image3;
  if (images.image1) {
    image1 = images.image1[0].path;
    imageUrl.push(image1);
  }
  if (images.image2) {
    image2 = images.image2[0].path;
    imageUrl.push(image2);
  }
  if (images.image3) {
    image3 = images.image3[0].path;
    imageUrl.push(image3);
  }
  return imageUrl;
}

const postEditCar = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldCar.imageUrl.length >= 2) {
        deleteFiles(oldCar.imageUrl);
      } else {
        deleteFile(oldCar.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldCar.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedCar.imageUrl[0];
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
    const images = req.files;
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
        editing: true,
        hasError: true,
      });
    }
    const oldMoto = await Moto.findById(productId);
    if (images.image1 || images.image2 || images.image3) {
      if (oldMoto.imageUrl.length >= 2) {
        deleteFiles(oldMoto.imageUrl);
      } else {
        deleteFile(oldMoto.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldMoto.imageUrl = newImageUrl;
    }
    oldMoto.shortInfo = shortInfo;
    oldMoto.model = model;
    oldMoto.motoCondition = motoCondition;
    oldMoto.address = address;
    oldMoto.extraInfo = extraInfo;
    oldMoto.price = price;
    oldMoto.phoneNumber = phoneNumber;

    const updatedMoto = await oldMoto.save();
    const oldGeneral = await General.findById(productId);
    oldGeneral.imageUrl = updatedMoto.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldTrack.imageUrl.length >= 2) {
        deleteFiles(oldTrack.imageUrl);
      } else {
        deleteFile(oldTrack.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldTrack.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedTrack.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldAnimal.imageUrl.length >= 2) {
        deleteFiles(oldAnimal.imageUrl);
      } else {
        deleteFile(oldAnimal.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldAnimal.imageUrl = newImageUrl;
    }
    oldAnimal.shortInfo = shortInfo;
    oldAnimal.address = address;
    oldAnimal.extraInfo = extraInfo;
    oldAnimal.price = price;
    oldAnimal.phoneNumber = phoneNumber;

    const updatedAnimal = await oldAnimal.save();
    const oldGeneral = await General.findById(productId);
    oldGeneral.imageUrl = updatedAnimal.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldHouseApp.imageUrl.length >= 2) {
        deleteFiles(oldHouseApp.imageUrl);
      } else {
        deleteFile(oldHouseApp.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldHouseApp.imageUrl = newImageUrl;
    }
    oldHouseApp.shortInfo = shortInfo;
    oldHouseApp.applianceName = applianceName;
    oldHouseApp.applianceCondition = applianceCondition;
    oldHouseApp.address = address;
    oldHouseApp.extraInfo = extraInfo;
    oldHouseApp.price = price;
    oldHouseApp.phoneNumber = phoneNumber;

    const updatedHouseApp = await oldHouseApp.save();
    const oldGeneral = await General.findById(productId);
    oldGeneral.imageUrl = updatedHouseApp.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldLapTop.imageUrl.length >= 2) {
        deleteFiles(oldLapTop.imageUrl);
      } else {
        deleteFile(oldLapTop.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldLapTop.imageUrl = newImageUrl;
    }
    oldLapTop.shortInfo = shortInfo;
    oldLapTop.mark = mark;
    oldLapTop.lapTopCondition = lapTopCondition;
    oldLapTop.address = address;
    oldLapTop.extraInfo = extraInfo;
    oldLapTop.price = price;
    oldLapTop.phoneNumber = phoneNumber;

    const updatedLapTop = await oldLapTop.save();
    const oldGeneral = await General.findById(productId);
    oldGeneral.imageUrl = updatedLapTop.imageUrl[0];
    (oldGeneral.shortInfo = updatedLapTop.shortInfo),
      (oldGeneral.price = updatedLapTop.price),
      (oldGeneral.address = updatedLapTop.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditPhone = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldPhone.imageUrl.length >= 2) {
        deleteFiles(oldPhone.imageUrl);
      } else {
        deleteFile(oldPhone.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldPhone.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedPhone.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldFlat.imageUrl.length >= 2) {
        deleteFiles(oldFlat.imageUrl);
      } else {
        deleteFile(oldFlat.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldFlat.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedFlat.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldHouse.imageUrl.length >= 2) {
        deleteFiles(oldHouse.imageUrl);
      } else {
        deleteFile(oldHouse.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldHouse.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedHouse.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldLand.imageUrl.length >= 2) {
        deleteFiles(oldLand.imageUrl);
      } else {
        deleteFile(oldLand.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldLand.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedLand.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldNonResi.imageUrl.length >= 2) {
        deleteFiles(oldNonResi.imageUrl);
      } else {
        deleteFile(oldNonResi.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldNonResi.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedNonResi.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldConstruction.imageUrl.length >= 2) {
        deleteFiles(oldConstruction.imageUrl);
      } else {
        deleteFile(oldConstruction.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldConstruction.imageUrl = newImageUrl;
    }
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
    (oldGeneral.shortInfo = updatedConstruction.shortInfo),
      (oldGeneral.imageUrl = updatedConstruction.imageUrl[0]),
      (oldGeneral.address = updatedConstruction.address),
      await oldGeneral.save();
    res.redirect('/user/products');
  } catch (err) {
    console.log(err);
  }
};

const postEditService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldService.imageUrl.length >= 2) {
        deleteFiles(oldService.imageUrl);
      } else {
        deleteFile(oldService.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldService.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedService.imageUrl[0];
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
    const images = req.files;
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
    if (images.image1 || images.image2 || images.image3) {
      if (oldVacancy.imageUrl.length >= 2) {
        deleteFiles(oldVacancy.imageUrl);
      } else {
        deleteFile(oldVacancy.imageUrl[0]);
      }
      const newImageUrl = getImageUrl(images);
      oldVacancy.imageUrl = newImageUrl;
    }
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
    oldGeneral.imageUrl = updatedVacancy.imageUrl[0];
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
