const { Schema, model } = require('mongoose');

const flatSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
    rooms: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    floors: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
    },
    floor: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
    },
    area: {
      type: Number,
      required: true,
    },
    flatCondition: {
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
    rentOrSell: String,
    flatHas: [],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Flat', flatSchema);
