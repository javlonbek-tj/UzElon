const { Schema, model } = require('mongoose');

const houseSchema = new Schema(
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
    rooms: {
      type: Number,
      required: true,
      min: 1,
    },
    area: {
      type: Number,
      required: true,
    },
    houseCondition: {
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
    houseHas: [String],
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

module.exports = model('House', houseSchema);
