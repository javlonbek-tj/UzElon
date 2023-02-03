const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  try {
    if (!req.cookies.jwt) {
      return res.redirect('./login');
    }
    // 1) verify token
    const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

    // 2) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.redirect('./login');
    }

    // 3) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.redirect('./login');
    }

    // THERE IS A LOGGED IN USER
    res.locals.user = currentUser;
    next();
  } catch (err) {
    console.log(err);
  }
};
