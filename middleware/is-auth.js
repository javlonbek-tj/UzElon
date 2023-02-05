const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.redirect('/login');
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
