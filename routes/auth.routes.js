const express = require('express');
const { check } = require('express-validator');
const User = require('../models/auth.model');

const router = express.Router();

const {
  getLogin,
  getSignUp,
  postSignUp,
  postLogin,
} = require('../controllers/auth');

router.get('/signup', getSignUp);
router.get('/login', getLogin);
router.post(
  '/signup',
  [
    check('username').trim().not().isEmpty().withMessage(`Barcha formalar to'
      ldirilishi kerak`),
    check('email')
      .trim()
      .not()
      .isEmpty()
      .withMessage(
        `Barcha formalar to'
      ldirilishi kerak`,
      )
      .isEmail()
      .withMessage(`Mavjud bo'lmagan email kiritildi`)
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(user => {
          if (user) {
            return Promise.reject(`Ushbu email mavjud, boshqa email kiriting`);
          }
        });
      })
      .normalizeEmail(),
    check('password')
      .not()
      .isEmpty()
      .withMessage(
        `Barcha fromalar to'
      ldirilishi kerak`,
      )
      .isLength({ min: 8 })
      .withMessage(`Parol kamida 8 ta belgidan iborat bo'lishi kerak`),
    check('rePassword')
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Parollar mos kelmadi');
        }
        return true;
      }),
  ],
  postSignUp,
);
router.post(
  '/login',
  [
    check('email')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Email kiritilmadi')
      .isEmail()
      .withMessage(`Mavjud bo'lmagan email kiritildi`)
      .normalizeEmail(),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Parol kiritilmadi')
      .isLength({ min: 8 })
      .withMessage(`Parol kamida 8 ta belgidan iborat bo'lishi kerak`),
  ],
  postLogin,
);

module.exports = router;
