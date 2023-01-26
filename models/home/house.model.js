const { Schema, model } = require('mongoose');

const houseSchema = new Schema({
  shortInfo: {
    type: String,
    required: true,
    max: 30
  },
  rooms: {
    type: Number,
    required: true,
    min: 1
  },
  area: {
    type: Number,
    required: true,
  },
  houseCondition: {
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
  houseHas: [String],
  rentOrSell: String
});

module.exports = model('House', houseSchema);
