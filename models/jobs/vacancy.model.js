const { Schema, model } = require('mongoose');

const vacancySchema = new Schema(
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
    gender: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    requiredAge: {
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
  },
  {
    timestamps: true,
  },
);

module.exports = model('Vacancy', vacancySchema);
