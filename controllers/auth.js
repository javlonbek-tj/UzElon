const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');

const createSendToken = (user, req, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  });
};

const getSignUp = (req, res, next) => {
  try {
    res.render('auth/signup', {
      pageTitle: 'AvtoVodil',
      errorMessage: false,
      product: {
        username: '',
        email: '',
        password: '',
        rePassword: '',
      },
      validationErrors: [],
    });
  } catch (err) {
    console.log(err);
  }
};

const postSignUp = async (req, res, next) => {
  try {
    const { username, email, password, rePassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render('auth/signup', {
        pageTitle: 'AvtoVodil',
        errorMessage: errors.array()[0].msg,
        product: {
          username,
          email,
          password,
          rePassword,
        },
        validationErrors: errors.array(),
      });
    }
    const user = new User({
      username,
      email,
      password,
    });
    const savedUser = await user.save();
    createSendToken(savedUser, req, res);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
const getLogin = (req, res, next) => {
  try {
    res.render('auth/login', {
      pageTitle: 'AvtoVodil',
      errorMessage: false,
      product: {
        username: '',
        email: '',
        password: '',
        rePassword: '',
      },
      validationErrors: [],
    });
  } catch (err) {
    console.log(err);
  }
};

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(422).render('auth/login', {
        pageTitle: 'AvtoVodil',
        errorMessage: 'Email yoki parol xato',
        product: {
          email,
          password,
        },
      });
    }
    createSendToken(user, req, res);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const isAuth = async (req, res, next) => {
  try {
    if (!req.cookies.jwt) {
      return next();
    }
    // 1) verify token
    const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

    // 2) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }

    // 3) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next();
    }

    // THERE IS A LOGGED IN USER
    req.user = currentUser;
    return next();
  } catch (err) {
    console.log(err);
  }
  res.locals.user = false;
  next();
};

const logout = (req, res, next) => {
  try {
    res.clearCookie('jwt');
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};

module.exports = {
  getSignUp,
  getLogin,
  postSignUp,
  postLogin,
  isAuth,
  restrictTo,
  logout,
};
