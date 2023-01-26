const { Schema, model } = require('mongoose');

const houseSchema = new Schema({
  rooms: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
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
});

module.exports = model('House', houseSchema);