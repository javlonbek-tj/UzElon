const { Schema, model } = require('mongoose');

const generalSchema = new Schema({
  shortInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model('General', generalSchema);
