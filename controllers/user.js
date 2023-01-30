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

const getUserProducts = async (req, res, next) => {
  try {
    const prods = await General.find();
    const price = prods.map(p => p.price.toLocaleString('fr'));
    res.render('products/home', {
      pageTitle: `Mening e'lonlarim`,
      prods,
      price,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserProducts,
};
