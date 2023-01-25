const { Schema, model } = require('mongoose');

const mopedSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  motoCondition: {
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

module.exports = model('Moped', mopedSchema);
