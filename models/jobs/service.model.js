const { Schema, model } = require('mongoose');

const serviceSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
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
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    extraInfo: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Service', serviceSchema);
