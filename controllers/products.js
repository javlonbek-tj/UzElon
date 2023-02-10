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
const filtering = require('../utils/filtering');

const formatProd = prods => {
  if (prods.length) {
    prods.map(p => {
      if (p.price) {
        p.price = p.price.toLocaleString('fr');
      }
      p.createdAt = p.createdAt.toLocaleString('en-GB');
      if (p.year) {
        p.year = p.year.getFullYear();
      }
    });
  } else {
    if (prods.price) {
      prods.price = prods.price.toLocaleString('fr');
    }
    prods.createdAt = prods.createdAt.toLocaleString('en-GB');
    if (prods.year) {
      prods.year = prods.year.getFullYear();
    }
  }
  return prods;
};

const getHomePage = async (req, res, next) => {
  try {
    const prods = await General.find().lean();
    formatProd(prods);
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
      const flat = await Flat.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(flat);
      const allFlat = await General.find({ category: 'estate' }).lean();
      const prods = formatProd(allFlat);
      return res.render('products/home-details/product-flat', {
        pageTitle: 'Kvartira oldi-sotdisi',
        flat,
        prods,
      });
    }
    if (productType == 'land') {
      const land = await Land.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(land);
      const prods = await General.find({ category: 'estate', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/home-details/product-land', {
        pageTitle: 'Yer oldi-sotdisi',
        land,
        prods,
      });
    }
    if (productType == 'house') {
      const house = await House.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(house);
      const prods = await General.find({ category: 'estate', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/home-details/product-house', {
        pageTitle: 'Hovli uy oldi-sotdisi',
        house,
        prods,
      });
    }
    if (productType == 'nonResidential') {
      const nonResidential = await NonResidential.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(nonResidential);
      const prods = await General.find({ category: 'estate', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/home-details/product-nonResidential', {
        pageTitle: 'Noturar joy oldi-sotdisi',
        nonResidential,
        prods,
      });
    }
    if (productType == 'car') {
      const car = await Car.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(car);
      const prods = await General.find({ category: 'avto', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/car-details/product-car', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        car,
        prods,
      });
    }
    if (productType == 'track') {
      const track = await Track.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(track);
      const prods = await General.find({ category: 'avto', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/car-details/product-track', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        track,
        prods,
      });
    }
    if (productType == 'moto') {
      const moto = await Moto.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(moto);
      const prods = await General.find({ category: 'avto', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/car-details/product-moto', {
        pageTitle: 'Avtomobil oldi-sotdisi',
        moto,
        prods,
      });
    }
    if (productType == 'vacancy') {
      const vacancy = await Vacancy.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(vacancy);
      const prods = await General.find({ category: 'jobs', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/job-details/product-vacancy', {
        pageTitle: `Bo'sh ish o'rinlari`,
        vacancy,
        prods,
      });
    }
    if (productType == 'service') {
      const service = await Service.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(service);
      const prods = await General.find({ category: 'jobs', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/job-details/product-service', {
        pageTitle: `Xizmat ko'rsatish`,
        service,
        prods,
      });
    }
    if (productType == 'construction') {
      const construction = await Construction.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true }).populate(
        'userId',
      );
      formatProd(construction);
      const prods = await General.find({ category: 'jobs', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/job-details/product-construction', {
        pageTitle: `Qurilish xizmati`,
        construction,
        prods,
      });
    }
    if (productType == 'phone') {
      const phone = await Phone.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(phone);
      const prods = await General.find({ category: 'electronics', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/electronic-details/product-phone', {
        pageTitle: `Telefonlar oldi-sotdisi`,
        phone,
        prods,
      });
    }
    if (productType == 'houseAppliances') {
      const houseAppliances = await HouseAppliances.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(houseAppliances);
      const prods = await General.find({ category: 'electronics', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/electronic-details/product-houseApp', {
        pageTitle: `Uy jihozlari oldi-sotdisi`,
        houseAppliances,
        prods,
      });
    }
    if (productType == 'laptop') {
      const lapTop = await LapTop.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(lapTop);
      const prods = await General.find({ category: 'electronics', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/electronic-details/product-lapTop', {
        pageTitle: `Kompyuterlar oldi-sotdisi`,
        lapTop,
        prods,
      });
    }
    if (productType == 'animal') {
      const animal = await Animal.findByIdAndUpdate(prodId, { $inc: { views: 1 } }, { new: true })
        .populate('userId')
        .lean();
      formatProd(animal);
      const prods = await General.find({ category: 'electronics', _id: { $ne: prodId } }).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products/electronic-details/product-animal', {
        pageTitle: 'Uy hayvonlari oldi-sotdisi',
        animal,
        prods,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    if (req.query.search) {
      const { search } = req.query;
      const prods = await General.searchPartial(search).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.status(200).render('products', {
        pageTitle: "Qidirilgan e'lonlar",
        prods,
        querySearch: req.query.search,
      });
    }
    if (!req.query.page || !req.query.limit) {
      let { category, from, to, address } = req.query;
      from = parseInt(from);
      to = parseInt(to);
      const filterings = filtering(category, from, to, address);
      const prods = await General.find(filterings).lean();
      if (prods.length > 0) {
        formatProd(prods);
      }
      return res.render('products', {
        pageTitle: "Qidirilgan e'lonlar",
        prods,
        querySearch: req.query.search,
      });
    }
    const prods = await General.find().lean();
    if (prods.length > 0) {
      formatProd(prods);
    }
    res.render('products', {
      pageTitle: "AvtoVodil barcha e'lonlar",
      prods,
      querySearch: '',
    });
  } catch (err) {
    console.log(err);
  }
};

const getAuthorProducts = async (req, res, next) => {
  try {
    const userId = req.params.authorId;
    if (!userId) {
      return console.log('Xatolik');
    }
    let isMe = null;
    if (req.user._id) {
      isMe = userId == req.user._id.toString();
    }
    const prods = await General.find({ userId }).lean();
    formatProd(prods);
    res.render('user/userProducts', {
      pageTitle: `Mening e'lonlarim`,
      prods,
      isMe,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getHomePage,
  getOneProduct,
  getAllProducts,
  getAuthorProducts,
  formatProd,
};
