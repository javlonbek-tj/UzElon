const { Schema, model } = require('mongoose');

const educationSchema = new Schema({
  educaiotnType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model('Education', educationSchema);
