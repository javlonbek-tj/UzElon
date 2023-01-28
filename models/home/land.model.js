const { Schema, model } = require('mongoose');

const buildingSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
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
    rentOrSell: String,
    landHas: [String],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Land', buildingSchema);
