const { Schema, model } = require('mongoose');

const phoneSchema = new Schema(
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
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Phone', phoneSchema);
