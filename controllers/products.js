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
const AppError = require('../utils/appError');
const { logout } = require('./auth');
const formatProd = require('../utils/formatProd');

const getHomePage = async (req, res, next) => {
  try {
    const topProds = await General.find({ top: { $ne: false } }).lean();
    if (topProds.length > 0) {
      formatProd(topProds);
    }
    const prods = await (await General.find({ top: { $ne: true } }).lean()).reverse().slice(0, 12);
    if (prods.length > 0) {
      formatProd(prods);
    }
    res.render('home', {
      pageTitle: 'AvtoVodil',
      prods,
      topProds,
    });
  } catch (err) {
    next(new AppError(err, 500));
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
      const nonResidential = await NonResidential.findByIdAndUpdate(
        prodId,
        { $inc: { views: 1 } },
        { new: true },
      )
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
      const construction = await Construction.findByIdAndUpdate(
        prodId,
        { $inc: { views: 1 } },
        { new: true },
      ).populate('userId');
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
      const houseAppliances = await HouseAppliances.findByIdAndUpdate(
        prodId,
        { $inc: { views: 1 } },
        { new: true },
      )
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
    } else {
      return next(new AppError("Ushbu e'lon topilmadi. Iltimos qaytadan urinib ko'ring.", 400));
    }
  } catch (err) {
    next(new AppError(err, 500));
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
        isOverLimit: null,
      });
    }
    if (req.query.category || req.query.from || req.query.to || req.query.address) {
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
        isOverLimit: null,
      });
    }
    const limit = 12;
    const page = parseInt(req.query.page) || 1;
    const total = await General.countDocuments();
    let isOverLimit = null;
    if (total > limit) {
      isOverLimit = true;
    }
    const prods = await General.find()
      .sort({ createdAt: -1 })
      .skip(page * limit - limit)
      .limit(limit)
      .lean();
    if (prods.length > 0) {
      formatProd(prods);
    }
    res.render('products', {
      pageTitle: "AvtoVodil barcha e'lonlar",
      prods,
      currentPage: page,
      hasNextPage: limit * page < total,
      hasPreviousPage: page > 1,
      nextPage: page + 1,
      previousPage: page - 1,
      lastPage: Math.ceil(total / limit),
      isOverLimit,
    });
  } catch (err) {
    next(new AppError(err, 500));
  }
};

const getAuthorProducts = async (req, res, next) => {
  try {
    const userId = req.params.authorId;
    if (!userId) {
      throw new Error("Muallif e'lonlarini topishda xatolik", 400);
    }
    let isMe = null;
    let admin = null;
    if (req.user.role === 'admin') {
      admin = true;
    }
    if (req.user) {
      isMe = userId == req.user._id.toString();
    }
    const prods = await General.find({ userId }).lean();
    formatProd(prods);
    res.render('user/userProducts', {
      pageTitle: `Mening e'lonlarim`,
      prods,
      isMe,
      admin,
    });
  } catch (err) {
    next(new AppError(err, 500));
  }
};

module.exports = {
  getHomePage,
  getOneProduct,
  getAllProducts,
  getAuthorProducts,
  formatProd,
};
