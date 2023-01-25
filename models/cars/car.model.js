const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  fluel: {
    type: String,
    required: true,
  },
  color: {
    type: Number,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  kmRun: {
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

module.exports = model('Flat', carSchema);
