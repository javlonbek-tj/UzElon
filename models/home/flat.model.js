const { Schema, model } = require('mongoose');

const flatSchema = new Schema({
  rooms: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  floors: {
    type: Number,
    required: true,
    min: 1,
    max: 50,
  },
  floor: {
    type: Number,
    required: true,
    min: 1,
    max: 50,
  },
  area: {
    type: Number,
    required: true,
  },
  flatCondition: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model('Flat', flatSchema);
