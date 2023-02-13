const { Schema, model } = require('mongoose');

const constructionSchema = new Schema(
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    top: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Construction', constructionSchema);
