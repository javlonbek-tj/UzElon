const { Schema, model } = require('mongoose');

const carSchema = new Schema(
  {
    imageUrl: {
      type: [Object],
      required: true,
    },
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
    model: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    fluel: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    kmRun: {
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
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    rentOrSell: String,
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Car', carSchema);
