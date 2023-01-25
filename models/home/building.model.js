const { Schema, model } = require('mongoose');

const buildingSchema = new Schema({
  rooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
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

module.exports = model('Building', buildingSchema);
