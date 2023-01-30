const { Schema, model } = require('mongoose');

const constructionSchema = new Schema(
  {
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

module.exports = model('Construction', constructionSchema);
