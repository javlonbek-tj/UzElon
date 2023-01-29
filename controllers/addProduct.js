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
    });
  } catch (err) {
    console.log(err);
  }
};
const getHouseCategory = (req, res, next) => {
  try {
    res.render('estate/house', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getLandCategory = (req, res, next) => {
  try {
    res.render('estate/land', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getNonResidentialCategory = (req, res, next) => {
  try {
    res.render('estate/nonResidential', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getCarCategory = (req, res, next) => {
  try {
    res.render('cars/car', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getTrackCategory = (req, res, next) => {
  try {
    res.render('cars/track', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getMotoCategory = (req, res, next) => {
  try {
    res.render('cars/moto', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getConstructionCategory = (req, res, next) => {
  try {
    res.render('jobs/construction', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getServiceCategory = (req, res, next) => {
  try {
    res.render('jobs/service', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getVacancyCategory = (req, res, next) => {
  try {
    res.render('jobs/vacancy', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getPhoneCategory = (req, res, next) => {
  try {
    res.render('electronics/phone', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
const getLapTopCategory = (req, res, next) => {
  try {
    res.render('electronics/lap-top', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
getHouseAppliancesCategory = (req, res, next) => {
  try {
    res.render('electronics/houseAppliances', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};
getAnimalCategory = (req, res, next) => {
  try {
    res.render('electronics/animal', {
      pageTitle: 'Add product',
    });
  } catch (err) {
    console.log(err);
  }
};

const postAddProduct = async (req, res, next) => {
  try {
    const productType = req.body.productType;
    if (productType === 'flat') {
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
      } = req.body;
      const { airConditioning, freeze, furniture, tv, washing } = req.body;
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
        rentOrSell: rentOrSell,
        flatHas: flatHas,
      });
      const newFlat = await flat.save();
      const general = new General({
        _id: newFlat._id,
        shortInfo: newFlat.shortInfo,
        price: newFlat.price,
        flatId: newFlat._id,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'house') {
      const houseHas = [];
      const { rentOrSell, shortInfo, rooms, area, houseCondition, address, extraInfo, price, phoneNumber } = req.body;
      const { gas, electricity } = req.body;
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
        houseHas: houseHas,
        rentOrSell: rentOrSell,
      });
      const newHouse = await house.save();
      const general = new General({
        _id: newHouse._id,
        shortInfo: newHouse.shortInfo,
        price: newHouse.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'land') {
      const landHas = [];
      const { rentOrSell, shortInfo, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
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
        rentOrSell,
        landHas,
      });
      const newLand = await land.save();
      const general = new General({
        _id: newLand._id,
        shortInfo: newLand.shortInfo,
        price: newLand.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'non-residential') {
      const buildingHas = [];
      const { shortInfo, rentOrSell, rooms, area, address, price, extraInfo, phoneNumber, gas, electricity } = req.body;
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
        rentOrSell,
        buildingHas,
      });
      const newNonResidential = await nonResidential.save();
      const general = new General({
        _id: newNonResidential._id,
        shortInfo: newNonResidential.shortInfo,
        price: newNonResidential.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'car') {
      const {
        rentOrSell,
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
      } = req.body;
      const car = new Car({
        shortInfo,
        model,
        transmission,
        fluel,
        color,
        year,
        kmRun,
        address,
        price,
        phoneNumber,
        rentOrSell,
      });
      const newcar = await car.save();
      const general = new General({
        _id: newcar._id,
        shortInfo: newcar.shortInfo,
        price: newcar.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'track') {
      const { rentOrSell, shortInfo, model, fluel, color, year, kmRun, address, extraInfo, price, phoneNumber } =
        req.body;
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
        rentOrSell,
      });
      const newTrack = await track.save();
      const general = new General({
        _id: newTrack._id,
        shortInfo: newTrack.shortInfo,
        price: newTrack.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'moto') {
      const { rentOrSell, shortInfo, model, motoCondition, address, extraInfo, price, phoneNumber } = req.body;
      const moto = new Moto({
        shortInfo,
        model,
        motoCondition,
        address,
        extraInfo,
        price,
        phoneNumber,
        rentOrSell,
      });
      const newMoto = await moto.save();
      const general = new General({
        _id: newMoto._id,
        shortInfo: newMoto.shortInfo,
        price: newMoto.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'construction') {
      const { shortInfo, serviceType, experience, numWorkers, workTime, extraInfo, address, phoneNumber } = req.body;
      const construction = new Construction({
        shortInfo,
        serviceType,
        experience,
        numWorkers,
        workTime,
        extraInfo,
        address,
        phoneNumber,
      });
      construction
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'service') {
      const { shortInfo, gender, serviceType, experience, birthday, address, extraInfo, price, phoneNumber } = req.body;
      const service = new Service({
        shortInfo,
        gender,
        serviceType,
        experience,
        birthday,
        address,
        extraInfo,
        price,
        phoneNumber,
      });
      const newService = await service.save();
      const general = new General({
        _id: newService._id,
        shortInfo: newService.shortInfo,
        price: newService.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'vacancy') {
      const { shortInfo, gender, position, requiredAge, address, extraInfo, price, phoneNumber } = req.body;
      const vacancy = new Vacancy({
        shortInfo,
        gender,
        position,
        requiredAge,
        address,
        extraInfo,
        price,
        phoneNumber,
      });
      const newVacancy = await vacancy.save();
      const general = new General({
        _id: newVacancy._id,
        shortInfo: newVacancy.shortInfo,
        price: newVacancy.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'phone') {
      const { shortInfo, mark, model, phoneCondition, memory, address, extraInfo, price, phoneNumber } = req.body;
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
      });
      const newPhone = await phone.save();
      const general = new General({
        _id: newPhone._id,
        shortInfo: newPhone.shortInfo,
        price: newPhone.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'laptop') {
      const { shortInfo, mark, lapTopCondition, cpu, ram, address, extraInfo, price, phoneNumber } = req.body;
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
      });
      const newLaptop = await laptop.save();
      const general = new General({
        _id: newLaptop._id,
        shortInfo: newLaptop.shortInfo,
        price: newLaptop.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'houseAppliances') {
      const { shortInfo, applianceName, applianceCondition, address, extraInfo, price, phoneNumber } = req.body;
      const houseAppliances = new HouseAppliances({
        shortInfo,
        applianceName,
        applianceCondition,
        address,
        extraInfo,
        price,
        phoneNumber,
      });
      const newHomeAppliances = await houseAppliances.save();
      const general = new General({
        _id: newHomeAppliances._id,
        shortInfo: newHomeAppliances.shortInfo,
        price: newHomeAppliances.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
    if (productType === 'animal') {
      const { shortInfo, animalName, address, price, extraInfo, phoneNumber } = req.body;
      const animal = new Animal({
        shortInfo,
        animalName,
        address,
        extraInfo,
        price,
        phoneNumber,
      });
      const newAnimal = await AnimationTimeline.save();
      const general = new General({
        _id: newAnimal._id,
        shortInfo: newAnimal.shortInfo,
        price: newAnimal.price,
      });
      const saved = await general.save();
      res.redirect('/');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAddProduct,
  getFlatCategory,
  postAddProduct,
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
};
