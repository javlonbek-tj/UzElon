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
      return res.render('products/home-details/product-flat', {
        pageTitle: 'Kvartira oldi-sotdisi',
        flat,
      });
    }
    if (productType == 'land') {
      const land = await Land.findById(prodId);
      return res.render('products/home-details/product-land', {
        pageTitle: 'Yer oldi-sotdisi',
        land,
      });
    }
    if (productType == 'house') {
      const house = await House.findById(prodId);
      return res.render('products/home-details/product-house', {
        pageTitle: 'Hovli uy oldi-sotdisi',
        house,
      });
    }
    if (productType == 'nonResidential') {
      const nonResidential = await NonResidential.findById(prodId);
      return res.render('products/home-details/product-nonResidential', {
        pageTitle: 'Noturar joy oldi-sotdisi',
        nonResidential,
      });
    }
    if (productType == 'car') {
      const car = await Car.findById(prodId);
      const year = car.year.getFullYear();
      return res.render('products/car-details/product-car', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        car,
        year,
      });
    }
    if (productType == 'track') {
      const track = await Track.findById(prodId);
      const year = track.year.getFullYear();
      return res.render('products/car-details/product-track', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        track,
        year,
      });
    }
    if (productType == 'moto') {
      const moto = await Moto.findById(prodId);
      return res.render('products/car-details/product-moto', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        moto,
      });
    }
    if (productType == 'vacancy') {
      const vacancy = await Vacancy.findById(prodId);
      return res.render('products/job-details/product-vacancy', {
        pageTitle: `Bo'sh ish o'rinlari`,
        vacancy,
      });
    }
    if (productType == 'service') {
      const service = await Service.findById(prodId);
      return res.render('products/job-details/product-service', {
        pageTitle: `Xizmat ko'rsatish`,
        service,
      });
    }
    if (productType == 'construction') {
      const construction = await Construction.findById(prodId);
      return res.render('products/job-details/product-construction', {
        pageTitle: `Qurilish xizmati`,
        construction,
      });
    }
    if (productType == 'phone') {
      const phone = await Phone.findById(prodId);
      return res.render('products/electronic-details/product-phone', {
        pageTitle: `Telefonlar oldi-sotdisi`,
        phone,
      });
    }
    if (productType == 'houseAppliances') {
      const houseAppliances = await HouseAppliances.findById(prodId);
      return res.render('products/electronic-details/product-houseApp', {
        pageTitle: `Uy jihozlari oldi-sotdisi`,
        houseAppliances,
      });
    }
    if (productType == 'laptop') {
      const lapTop = await LapTop.findById(prodId);
      return res.render('products/electronic-details/product-lapTop', {
        pageTitle: `Kompyuterlar oldi-sotdisi`,
        lapTop,
      });
    }
    if (productType == 'animal') {
      const animal = await Animal.findById(prodId);
      return res.render('products/electronic-details/product-animal', {
        pageTitle: 'Uy hayvonlari oldi-sotdisi',
        animal,
      });
    }
  } catch (err) {
    const error = new AppError(`Saytda texnik ishlar amalga oshirilmoqda. Noqulayliklar uchun uzr.`, 500);
    return next(error);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    const prods = await General.find();
    const price = prods.map(p => p.price.toLocaleString('fr'));
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
