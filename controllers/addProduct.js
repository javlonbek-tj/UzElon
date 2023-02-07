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

function getImageUrl(images) {
  const image1 = images.image1[0].path;
  const imageUrl = [image1];
  let image2;
  let image3;
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

const postCarAdding = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, model, transmission, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber, rentOrSell } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
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
    const general = new General({
      _id: newCar._id,
      imageUrl: newCar.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { rentOrSell, shortInfo, model, motoCondition, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const moto = new Moto({
      imageUrl,
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
      imageUrl: newMoto.imageUrl[0],
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
    const images = req.files;
    console.log(images);
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { rentOrSell, shortInfo, model, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const track = new Track({
      imageUrl,
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
      imageUrl: newTrack.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, animalName, address, price, extraInfo, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
      return res.render('electronics/animal', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          animalName,
          address,
          extraInfo,
          price,
          phoneNumber,
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const animal = new Animal({
      imageUrl,
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
      imageUrl: newAnimal.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, applianceName, applianceCondition, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const houseAppliances = new HouseAppliances({
      imageUrl,
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
      imageUrl: newHomeAppliances.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, mark, lapTopCondition, cpu, ram, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const laptop = new LapTop({
      imageUrl,
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
      imageUrl: newLaptop.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, mark, model, phoneCondition, memory, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const phone = new Phone({
      imageUrl,
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
      imageUrl: newPhone.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
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
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
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
    const imageUrl = getImageUrl(images);
    const flat = new Flat({
      imageUrl,
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
      imageUrl: newFlat.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const houseHas = [];
    const { rentOrSell, shortInfo, rooms, area, houseCondition, address, extraInfo, price, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
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
    const imageUrl = getImageUrl(images);
    const house = new House({
      imageUrl,
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
      imageUrl: newHouse.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const landHas = [];
    const { rentOrSell, shortInfo, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty() || !images.image1) {
      return res.render('estate/land', {
        pageTitle: 'Add product',
        product: {
          shortInfo,
          area,
          address,
          price,
          extraInfo,
          phoneNumber,
          imageError,
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
    const imageUrl = getImageUrl(images);
    const land = new Land({
      imageUrl,
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
      imageUrl: newLand.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const buildingHas = [];
    const { shortInfo, rentOrSell, rooms, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
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
    const imageUrl = getImageUrl(images);
    const nonResidential = new NonResidential({
      imageUrl,
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
      imageUrl: newNonResidential.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, serviceType, experience, numWorkers, workTime, extraInfo, address, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const construction = new Construction({
      imageUrl,
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
      imageUrl: newConstruction.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, gender, serviceType, experience, age, address, extraInfo, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const service = new Service({
      imageUrl,
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
      imageUrl: newService.imageUrl[0],
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
    const images = req.files;
    let imageError = null;
    if (!images.image1) {
      imageError = true;
    }
    const { shortInfo, gender, position, requiredAge, address, extraInfo, price, phoneNumber } = req.body;
    if (!errors.isEmpty() || !images.image1) {
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
          imageError,
        },
        validationErrors: errors.array(),
        editing: false,
        hasError: true,
      });
    }
    const imageUrl = getImageUrl(images);
    const vacancy = new Vacancy({
      imageUrl,
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
      imageUrl: newVacancy.imageUrl[0],
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
