const { Schema, model } = require('mongoose');

const phoneSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
    mark: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    phoneCondition: {
      type: String,
      required: true,
    },
    memory: {
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
  },
  {
    timestamps: true,
  },
);

module.exports = model('Phone', phoneSchema);
