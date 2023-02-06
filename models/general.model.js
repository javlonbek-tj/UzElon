const { Schema, model } = require('mongoose');
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

const generalSchema = new Schema({
  imageUrl: {
    type: [String],
    required: true,
  },
  shortInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  dollar: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  productType: String,
});

module.exports = model('General', generalSchema);
