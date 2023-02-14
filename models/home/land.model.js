const { Schema, model } = require('mongoose');

const buildingSchema = new Schema(
  {
    imageUrl: {
      type: [String],
      required: true,
    },
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
    landHas: [String],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Land', buildingSchema);
