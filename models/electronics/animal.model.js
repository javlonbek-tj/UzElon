const { Schema, model } = require('mongoose');

const animalSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
    animalName: {
      type: String,
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
    price: {
      type: Number,
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

module.exports = model('Animal', animalSchema);
