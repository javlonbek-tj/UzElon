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

const getHomePage = async (req, res, next) => {
  try {
    const prods = await General.find();
    const price = prods.map(p => p.price.toLocaleString('fr'));
    res.render('home', {
      pageTitle: 'AvtoVodil',
      prods,
      price,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    if (await Flat.findById(prodId)) {
      const flat = await Flat.findById(prodId);
      return res.render('products/home-detail/product-flat', {
        pageTitle: 'Kvartira oldi-sotdisi',
        flat,
      });
    }
    if (await Land.findById(prodId)) {
      const land = await Land.findById(prodId);
      return res.render('products/home-detail/product-land', {
        pageTitle: 'Yer oldi-sotdisi',
        land,
      });
    }
    if (await House.findById(prodId)) {
      const house = await House.findById(prodId);
      return res.render('products/home-detail/product-house', {
        pageTitle: 'Hovli uy oldi-sotdisi',
        house,
      });
    }
    if (await NonResidential.findById(prodId)) {
      const nonResidential = await NonResidential.findById(prodId);
      return res.render('products/home-detail/product-nonResidential', {
        pageTitle: 'Noturar joy oldi-sotdisi',
        nonResidential,
      });
    }
    if (await Car.findById(prodId)) {
      const car = await Car.findById(prodId);
      const year = car.year.getFullYear();
      return res.render('products/car-detail/product-car', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        car,
        year,
      });
    }
    if (await Track.findById(prodId)) {
      const track = await Track.findById(prodId);
      const year = track.year.getFullYear();
      return res.render('products/car-detail/product-track', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        track,
        year,
      });
    }
    if (await Moto.findById(prodId)) {
      const moto = await Moto.findById(prodId);
      return res.render('products/car-detail/product-moto', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        moto,
      });
    }
    if (await Vacancy.findById(prodId)) {
      const vacancy = await Vacancy.findById(prodId);
      return res.render('products/job-details/product-vacancy', {
        pageTitle: `Bo'sh ish o'rinlari`,
        vacancy,
      });
    }
    if (await Service.findById(prodId)) {
      const service = await Service.findById(prodId);
      return res.render('products/job-details/product-service', {
        pageTitle: `Xizmat ko'rsatish`,
        service,
      });
    }
    if (await Construction.findById(prodId)) {
      const construction = await Construction.findById(prodId);
      return res.render('products/job-details/product-construction', {
        pageTitle: `Qurilish xizmati`,
        construction,
      });
    }
    if (await Phone.findById(prodId)) {
      const phone = await Phone.findById(prodId);
      return res.render('products/electronic-details/product-phone', {
        pageTitle: `Telefonlar oldi-sotdisi`,
        phone,
      });
    }
    if (await HouseAppliances.findById(prodId)) {
      const houseAppliances = await HouseAppliances.findById(prodId);
      return res.render('products/electronic-details/product-houseApp', {
        pageTitle: `Uy jihozlari oldi-sotdisi`,
        houseAppliances,
      });
    }
    if (await LapTop.findById(prodId)) {
      const lapTop = await LapTop.findById(prodId);
      return res.render('products/electronic-details/product-lapTop', {
        pageTitle: `Kompyuterlar oldi-sotdisi`,
        lapTop,
      });
    }
    if (await Animal.findById(prodId)) {
      const animal = await Animal.findById(prodId);
      return res.render('products/electronic-details/product-animal', {
        pageTitle: 'Uy hayvonlari oldi-sotdisi',
        animal,
      });
    }
  } catch (err) {
    console.log(err);
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
