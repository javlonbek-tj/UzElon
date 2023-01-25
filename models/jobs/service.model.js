const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  gender: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model('Service', serviceSchema);
