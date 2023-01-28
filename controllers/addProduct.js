const Flat = require('../models/home/flat.model');
const House = require('../models/home/house.model');
const Land = require('../models/home/land.model');
const NonResidential = require('../models/home/nonResidential.model');
const Car = require('../models/cars/car.model');
const Track = require('../models/cars/track.model');
const Moto = require('../models/cars/moto.model');
const Resume = require('../models/jobs/resume.model');
const Construction = require('../models/jobs/construction.model');
const Service = require('../models/jobs/service.model');
const Phone = require('../models/electronics/phone.model');
const LapTop = require('../models/electronics/lap-top.model');
const HouseAppliances = require('../models/electronics/houseAppliances.model');
const Animal = require('../models/electronics/animal.model');

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
const getResumeCategory = (req, res, next) => {
  try {
    res.render('jobs/resume', {
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

const postAddProduct = (req, res, next) => {
  try {
    const productType = req.body.productType;
    if (productType === 'flat') {
      const flatHas = [];
      const { rentOrSell, shortInfo, rooms, floors, floor, area, flatCondition, address, price, phoneNumber } =
        req.body;
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
        price: price,
        phoneNumber: phoneNumber,
        rentOrSell: rentOrSell,
        flatHas: flatHas,
      });
      flat
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'house') {
      const houseHas = [];
      const { rentOrSell, shortInfo, rooms, area, houseCondition, address, price, phoneNumber } = req.body;
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
        price: price,
        phoneNumber: phoneNumber,
        houseHas: houseHas,
        rentOrSell: rentOrSell,
      });
      house
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'land') {
      const landHas = [];
      const { rentOrSell, shortInfo, area, address, price, phoneNumber, gas, electricity } = req.body;
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
        price,
        phoneNumber,
        rentOrSell,
        landHas,
      });
      land
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'non-residential') {
      const buildingHas = [];
      const { shortInfo, rentOrSell, rooms, area, address, price, phoneNumber, gas, electricity } = req.body;
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
        price,
        phoneNumber,
        rentOrSell,
        buildingHas,
      });
      nonResidential
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'car') {
      const { rentOrSell, shortInfo, model, transmission, fluel, color, year, kmRun, address, price, phoneNumber } =
        req.body;
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
      car
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'track') {
      const { rentOrSell, shortInfo, model, fluel, color, year, kmRun, address, price, phoneNumber } = req.body;
      const track = new Track({
        shortInfo,
        model,
        fluel,
        color,
        year,
        kmRun,
        address,
        price,
        phoneNumber,
        rentOrSell,
      });
      track
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'moto') {
      const { rentOrSell, shortInfo, model, motoCondition, address, price, phoneNumber } = req.body;
      const moto = new Moto({
        shortInfo,
        model,
        motoCondition,
        address,
        price,
        phoneNumber,
        rentOrSell,
      });
      moto
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'resume') {
      const { shortInfo, educationType, gender, specialization, experience, birthday, address, salary, phoneNumber } =
        req.body;
      const resume = new Resume({
        shortInfo,
        educationType,
        gender,
        specialization,
        experience,
        birthday,
        address,
        salary,
        phoneNumber,
      });
      resume
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'construction') {
      const { shortInfo, serviceType, experience, numWorkers, workTime, address, phoneNumber } = req.body;
      const construction = new Construction({
        shortInfo,
        serviceType,
        experience,
        numWorkers,
        workTime,
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
      const { shortInfo, gender, serviceType, experience, birthday, address, price, phoneNumber } = req.body;
      const service = new Service({
        shortInfo,
        gender,
        serviceType,
        experience,
        birthday,
        address,
        price,
        phoneNumber,
      });
      service
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'phone') {
      const { shortInfo, mark, model, phoneCondition, memory, address, price, phoneNumber } = req.body;
      const phone = new Phone({
        shortInfo,
        mark,
        model,
        phoneCondition,
        memory,
        address,
        price,
        phoneNumber,
      });
      phone
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'laptop') {
      const { shortInfo, mark, lapTopCondition, cpu, ram, address, price, phoneNumber } = req.body;
      const laptop = new LapTop({
        shortInfo,
        mark,
        lapTopCondition,
        cpu,
        ram,
        address,
        price,
        phoneNumber,
      });
      laptop
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'houseAppliances') {
      const { shortInfo, applianceName, applianceCondition, address, price, phoneNumber } = req.body;
      const houseAppliances = new HouseAppliances({
        shortInfo,
        applianceName,
        applianceCondition,
        address,
        price,
        phoneNumber,
      });
      houseAppliances
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (productType === 'animal') {
      const { shortInfo, animalName, address, price, phoneNumber } = req.body;
      const animal = new Animal({
        shortInfo,
        animalName,
        address,
        price,
        phoneNumber,
      });
      animal
        .save()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          console.log(err);
        });
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
  getResumeCategory,
  getConstructionCategory,
  getServiceCategory,
  getPhoneCategory,
  getLapTopCategory,
  getHouseAppliancesCategory,
  getAnimalCategory,
};
