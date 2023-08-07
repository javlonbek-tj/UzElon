const General = require('../models/general.model');

const postMakeProductTop = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const product = await General.findById(prodId);
    product.top = true;
    await product.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

const postMakeProductBottom = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const product = await General.findById(prodId);
    product.top = false;
    await product.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postMakeProductTop,
  postMakeProductBottom,
};
