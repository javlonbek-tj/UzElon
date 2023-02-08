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

const getHomePage = async (req, res, next) => {
  try {
    const prods = await General.find().lean();
    prods.map(p => {
      p.price = p.price.toLocaleString('fr');
      p.createdAt = p.createdAt.toLocaleString('en-GB');
    });
    res.render('home', {
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
    const { productType } = req.query;
    if (productType == 'flat') {
      const flat = await Flat.findById(prodId);
      const date = flat.createdAt.toLocaleString('en-GB');
      return res.render('products/home-details/product-flat', {
        pageTitle: 'Kvartira oldi-sotdisi',
        flat,
        date,
      });
    }
    if (productType == 'land') {
      const land = await Land.findById(prodId);
      const date = land.createdAt.toLocaleString('en-GB');
      return res.render('products/home-details/product-land', {
        pageTitle: 'Yer oldi-sotdisi',
        land,
        date,
      });
    }
    if (productType == 'house') {
      const house = await House.findById(prodId);
      const date = house.createdAt.toLocaleString('en-GB');
      return res.render('products/home-details/product-house', {
        pageTitle: 'Hovli uy oldi-sotdisi',
        house,
        date,
      });
    }
    if (productType == 'nonResidential') {
      const nonResidential = await NonResidential.findById(prodId);
      const date = nonResidential.createdAt.toLocaleString('en-GB');
      return res.render('products/home-details/product-nonResidential', {
        pageTitle: 'Noturar joy oldi-sotdisi',
        nonResidential,
        date,
      });
    }
    if (productType == 'car') {
      const car = await Car.findById(prodId);
      const date = car.createdAt.toLocaleString('en-GB');
      const year = car.year.getFullYear();
      return res.render('products/car-details/product-car', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        car,
        year,
        date,
      });
    }
    if (productType == 'track') {
      const track = await Track.findById(prodId);
      const date = track.createdAt.toLocaleString('en-GB');
      const year = track.year.getFullYear();
      return res.render('products/car-details/product-track', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        track,
        year,
        date,
      });
    }
    if (productType == 'moto') {
      const moto = await Moto.findById(prodId);
      const date = moto.createdAt.toLocaleString('en-GB');
      return res.render('products/car-details/product-moto', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        moto,
        date,
      });
    }
    if (productType == 'vacancy') {
      const vacancy = await Vacancy.findById(prodId);
      const date = vacancy.createdAt.toLocaleString('en-GB');
      return res.render('products/job-details/product-vacancy', {
        pageTitle: `Bo'sh ish o'rinlari`,
        vacancy,
        date,
      });
    }
    if (productType == 'service') {
      const service = await Service.findById(prodId);
      const date = service.createdAt.toLocaleString('en-GB');
      return res.render('products/job-details/product-service', {
        pageTitle: `Xizmat ko'rsatish`,
        service,
        date,
      });
    }
    if (productType == 'construction') {
      const construction = await Construction.findById(prodId);
      const date = construction.createdAt.toLocaleString('en-GB');
      return res.render('products/job-details/product-construction', {
        pageTitle: `Qurilish xizmati`,
        construction,
        date,
      });
    }
    if (productType == 'phone') {
      const phone = await Phone.findById(prodId);
      const date = phone.createdAt.toLocaleString('en-GB');
      return res.render('products/electronic-details/product-phone', {
        pageTitle: `Telefonlar oldi-sotdisi`,
        phone,
        date,
      });
    }
    if (productType == 'houseAppliances') {
      const houseAppliances = await HouseAppliances.findById(prodId);
      const date = houseAppliances.createdAt.toLocaleString('en-GB');
      return res.render('products/electronic-details/product-houseApp', {
        pageTitle: `Uy jihozlari oldi-sotdisi`,
        houseAppliances,
        date,
      });
    }
    if (productType == 'laptop') {
      const lapTop = await LapTop.findById(prodId);
      const date = lapTop.createdAt.toLocaleString('en-GB');
      return res.render('products/electronic-details/product-lapTop', {
        pageTitle: `Kompyuterlar oldi-sotdisi`,
        lapTop,
        date,
      });
    }
    if (productType == 'animal') {
      const animal = await Animal.findById(prodId);
      const date = animal.createdAt.toLocaleString('en-GB');
      return res.render('products/electronic-details/product-animal', {
        pageTitle: 'Uy hayvonlari oldi-sotdisi',
        animal,
        date,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    const prods = await General.find().lean();
    prods.map(p => {
      p.price = p.price.toLocaleString('fr');
      p.createdAt = p.createdAt.toLocaleString('en-GB');
    });
    res.render('products', {
      pageTitle: "AvtoVodil barcha e'lonlar",
      prods,
      price,
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
