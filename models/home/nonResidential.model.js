const { Schema, model } = require('mongoose');

const nonResidentialSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rentOrSell: String,
    buildingHas: [],
  },
  {
    timestamps: true,
  },
);

module.exports = model('NonResidential', nonResidentialSchema);
