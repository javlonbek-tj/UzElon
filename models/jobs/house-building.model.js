const { Schema, model } = require('mongoose');

const houseBuildSchema = new Schema({
  shortInfo: {
    type: String,
    required: true,
    max: 30,
  },
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
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = model('HouseBuilding', houseBuildSchema);
