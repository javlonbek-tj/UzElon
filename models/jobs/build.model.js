const { Schema, model } = require('mongoose');

const buildSchema = new Schema({
  serviceType: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  numWorkers: {
    type: Number,
    required: true,
  },
  workTime: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model('Build', buildSchema);
