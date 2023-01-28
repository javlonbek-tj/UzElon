const { Schema, model } = require('mongoose');

const houseAppliancesSchema = new Schema(
  {
    shortInfo: {
      type: String,
      required: true,
      max: 30,
    },
    applianceName: {
      type: String,
      required: true,
    },
    applianceCondition: {
      type: String,
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

module.exports = model('HouseAppliances', houseAppliancesSchema);
