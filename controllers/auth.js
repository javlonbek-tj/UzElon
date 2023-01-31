const User = require('../models/auth.model');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const signUpToken = id => {
  jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const getSignUp = (req, res, next) => {
  try {
    res.render('auth/signup', {
      pageTitle: 'AvtoVodil',
      errorMessage: false,
      oldInput: {
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
        oldInput: {
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
    const token = signUpToken(savedUser._id);
    console.log(token);
    res.redirect('/login');
    console.log(token);
  } catch (err) {
    console.log(err);
  }
};
const getLogin = (req, res, next) => {
  try {
    res.render('auth/login', {
      pageTitle: 'AvtoVodil',
      errorMessage: false,
      oldInput: {
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render('auth/login', {
        pageTitle: 'AvtoVodil',
        errorMessage: errors.array()[0].msg,
        oldInput: {
          email,
          password,
        },
        validationErrors: errors.array(),
      });
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(422).render('auth/login', {
        pageTitle: 'AvtoVodil',
        errorMessage: 'Email yoki parol xato',
        oldInput: {
          email,
          password,
        },
        validationErrors: errors.array(),
      });
    }
    const token = signUpToken(user._id);
    console.log(token);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getSignUp,
  getLogin,
  postSignUp,
  postLogin,
};
