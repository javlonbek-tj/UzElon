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
const General = require('../models/general.model');
const { validationResult } = require('express-validator');

const getAddProduct = (req, res, next) => {
  try {
    res.render('user/add-product', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getFlatCategory = (req, res, next) => {
  try {
    res.render('estate/flat', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        rooms: '',
        floors: '',
        floor: '',
        area: '',
        flatCondition: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getHouseCategory = (req, res, next) => {
  try {
    res.render('estate/house', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        applianceName: '',
        applianceCondition: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getLandCategory = (req, res, next) => {
  try {
    res.render('estate/land', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        area: '',
        address: '',
        price: '',
        extraInfo: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getNonResidentialCategory = (req, res, next) => {
  try {
    res.render('estate/nonResidential', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        rooms: '',
        area: '',
        address: '',
        price: '',
        extraInfo: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getCarCategory = (req, res, next) => {
  try {
    res.render('cars/car', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        model: '',
        transmission: '',
        fluel: '',
        color: '',
        year: '',
        kmRun: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      hasError: false,
      editing: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getTrackCategory = (req, res, next) => {
  try {
    res.render('cars/track', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        model: '',
        fluel: '',
        color: '',
        year: '',
        kmRun: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getMotoCategory = (req, res, next) => {
  try {
    res.render('cars/moto', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        model: '',
        motoCondition: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getConstructionCategory = (req, res, next) => {
  try {
    res.render('jobs/construction', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        serviceType: '',
        experience: '',
        numWorkers: '',
        workTime: '',
        extraInfo: '',
        address: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getServiceCategory = (req, res, next) => {
  try {
    res.render('jobs/service', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        gender: '',
        serviceType: '',
        experience: '',
        age: '',
        address: '',
        extraInfo: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getVacancyCategory = (req, res, next) => {
  try {
    res.render('jobs/vacancy', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        gender: '',
        position: '',
        requiredAge: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getPhoneCategory = (req, res, next) => {
  try {
    res.render('electronics/phone', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        mark: '',
        model: '',
        phoneCondition: '',
        memory: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getLapTopCategory = (req, res, next) => {
  try {
    res.render('electronics/lap-top', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        mark: '',
        lapTopCondition: '',
        cpu: '',
        ram: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getHouseAppliancesCategory = (req, res, next) => {
  try {
    res.render('electronics/houseAppliances', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        applianceName: '',
        applianceCondition: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAnimalCategory = (req, res, next) => {
  try {
    res.render('electronics/animal', {
      pageTitle: 'Add product',
      product: {
        shortInfo: '',
        animalName: '',
        address: '',
        extraInfo: '',
        price: '',
        phoneNumber: '',
      },
      validationErrors: [],
      editing: false,
      hasError: false,
    });
  } catch (err) {
    console.log(err);
  }
};

const postCarAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const images = req.files;
    const { shortInfo, model, transmission, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber, rentOrSell } = req.body;
    if (!errors.isEmpty() || images.length <= 0) {
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
    const imageUrl = images.map(i => {
      return i.path.replace('\\', '/');
    });
    console.log(imageUrl);
    const car = new Car({
      imageUrl,
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
      userId: req.user,
      rentOrSell,
    });
    const newCar = await car.save();
    console.log(newCar.imageUrl);
    const general = new General({
      _id: newCar._id,
      imageUrl: newCar.imageUrl,
      shortInfo: newCar.shortInfo,
      price: newCar.price,
      address: newCar.address,
      dollar: true,
      userId: req.user,
      productType: 'car',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postMotoadding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { rentOrSell, shortInfo, model, motoCondition, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
          userId: req.user,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const moto = new Moto({
      shortInfo,
      model,
      motoCondition,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
      rentOrSell,
    });
    const newMoto = await moto.save();
    const general = new General({
      _id: newMoto._id,
      shortInfo: newMoto.shortInfo,
      price: newMoto.price,
      address: newMoto.address,
      userId: req.user,
      productType: 'moto',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postTrackAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { rentOrSell, shortInfo, model, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const track = new Track({
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
      userId: req.user,
      rentOrSell,
    });
    const newTrack = await track.save();
    const general = new General({
      _id: newTrack._id,
      shortInfo: newTrack.shortInfo,
      price: newTrack.price,
      address: newTrack.address,
      dollar: true,
      userId: req.user,
      productType: 'track',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postAnimalAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, animalName, address, price, extraInfo, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
      return res.render('electronics/animal', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          animalName,
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
    const animal = new Animal({
      shortInfo,
      animalName,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
    });
    const newAnimal = await animal.save();
    const general = new General({
      _id: newAnimal._id,
      shortInfo: newAnimal.shortInfo,
      price: newAnimal.price,
      address: newAnimal.address,
      userId: req.user,
      productType: 'animal',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postHouseApp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, applianceName, applianceCondition, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const houseAppliances = new HouseAppliances({
      shortInfo,
      applianceName,
      applianceCondition,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
    });
    const newHomeAppliances = await houseAppliances.save();
    const general = new General({
      _id: newHomeAppliances._id,
      shortInfo: newHomeAppliances.shortInfo,
      price: newHomeAppliances.price,
      address: newHomeAppliances.address,
      userId: req.user,
      productType: 'houseAppliances',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postLapTopAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, mark, lapTopCondition, cpu, ram, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const laptop = new LapTop({
      shortInfo,
      mark,
      lapTopCondition,
      cpu,
      ram,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
    });
    const newLaptop = await laptop.save();
    const general = new General({
      _id: newLaptop._id,
      shortInfo: newLaptop.shortInfo,
      price: newLaptop.price,
      address: newLaptop.address,
      userId: req.user,
      productType: 'laptop',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postPhoneAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, mark, model, phoneCondition, memory, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const phone = new Phone({
      shortInfo,
      mark,
      model,
      phoneCondition,
      memory,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
    });
    const newPhone = await phone.save();
    const general = new General({
      _id: newPhone._id,
      shortInfo: newPhone.shortInfo,
      price: newPhone.price,
      address: newPhone.address,
      userId: req.user,
      productType: 'phone',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postFlatAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
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
      airConditioning,
      freeze,
      furniture,
      tv,
      washing,
    } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
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
    const flat = new Flat({
      shortInfo: shortInfo,
      rooms: rooms,
      floors: floors,
      floor: floor,
      area: area,
      flatCondition: flatCondition,
      address: address,
      extraInfo,
      price: price,
      phoneNumber: phoneNumber,
      userId: req.user,
      rentOrSell: rentOrSell,
      flatHas: flatHas,
    });
    const newFlat = await flat.save();
    const general = new General({
      _id: newFlat._id,
      shortInfo: newFlat.shortInfo,
      price: newFlat.price,
      address: newFlat.address,
      dollar: true,
      userId: req.user,
      productType: 'flat',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postHouseAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const houseHas = [];
    const { rentOrSell, shortInfo, rooms, area, houseCondition, address, extraInfo, price, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    if (gas) {
      houseHas.push(gas);
    }
    if (electricity) {
      houseHas.push(electricity);
    }
    const house = new House({
      shortInfo: shortInfo,
      rooms: rooms,
      area: area,
      houseCondition: houseCondition,
      address: address,
      extraInfo,
      price: price,
      phoneNumber: phoneNumber,
      userId: req.user,
      houseHas: houseHas,
      rentOrSell: rentOrSell,
    });
    const newHouse = await house.save();
    const general = new General({
      _id: newHouse._id,
      shortInfo: newHouse.shortInfo,
      price: newHouse.price,
      address: newHouse.address,
      dollar: true,
      userId: req.user,
      productType: 'house',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postLandAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const landHas = [];
    const { rentOrSell, shortInfo, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty()) {
      return res.render('estate/land', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          area,
          address,
          price,
          extraInfo,
          phoneNumber,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    if (gas) {
      landHas.push(gas);
    }
    if (electricity) {
      landHas.push(electricity);
    }
    const land = new Land({
      shortInfo,
      area,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
      rentOrSell,
      landHas,
    });
    const newLand = await land.save();
    const general = new General({
      _id: newLand._id,
      shortInfo: newLand.shortInfo,
      price: newLand.price,
      address: newLand.address,
      dollar: true,
      userId: req.user,
      productType: 'land',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postNonResiAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const buildingHas = [];
    const { shortInfo, rentOrSell, rooms, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    if (gas) {
      buildingHas.push(gas);
    }
    if (electricity) {
      buildingHas.push(electricity);
    }
    const nonResidential = new NonResidential({
      shortInfo,
      rooms,
      area,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
      rentOrSell,
      buildingHas,
    });
    const newNonResidential = await nonResidential.save();
    const general = new General({
      _id: newNonResidential._id,
      shortInfo: newNonResidential.shortInfo,
      price: newNonResidential.price,
      address: newNonResidential.address,
      dollar: true,
      userId: req.user,
      productType: 'nonResidential',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postConstructionAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, serviceType, experience, numWorkers, workTime, extraInfo, address, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const construction = new Construction({
      shortInfo,
      serviceType,
      experience,
      numWorkers,
      workTime,
      extraInfo,
      address,
      phoneNumber,
      userId: req.user,
    });
    const newConstruction = await construction.save();
    const general = new General({
      _id: newConstruction._id,
      shortInfo: newConstruction.shortInfo,
      address: newConstruction.address,
      userId: req.user,
      productType: 'construction',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postServiceAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, gender, serviceType, experience, age, address, extraInfo, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const service = new Service({
      shortInfo,
      gender,
      serviceType,
      experience,
      age,
      address,
      extraInfo,
      phoneNumber,
      userId: req.user,
    });
    const newService = await service.save();
    const general = new General({
      _id: newService._id,
      shortInfo: newService.shortInfo,
      address: newService.address,
      userId: req.user,
      productType: 'service',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const postVacancyAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const image = req.file;
    if (!image) {
    }
    const { shortInfo, gender, position, requiredAge, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty()) {
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
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const vacancy = new Vacancy({
      shortInfo,
      gender,
      position,
      requiredAge,
      address,
      extraInfo,
      price,
      phoneNumber,
      userId: req.user,
    });
    const newVacancy = await vacancy.save();
    const general = new General({
      _id: newVacancy._id,
      shortInfo: newVacancy.shortInfo,
      price: newVacancy.price,
      address: newVacancy.address,
      userId: req.user,
      productType: 'vacancy',
    });
    const saved = await general.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAddProduct,
  getFlatCategory,
  getHouseCategory,
  getLandCategory,
  getNonResidentialCategory,
  getCarCategory,
  getTrackCategory,
  getMotoCategory,
  getConstructionCategory,
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
};
