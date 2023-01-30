const { Schema, model } = require('mongoose');

const generalSchema = new Schema({
  shortInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  dollar: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('General', generalSchema);
