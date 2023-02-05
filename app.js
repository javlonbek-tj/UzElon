const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { isAuth } = require('./controllers/auth');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongodb-session')(session);
const User = require('./models/user.model');
const { Strategy } = require('passport-google-oauth20');
const dotenv = require('dotenv');

dotenv.config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google profile', profile);
  done(null, profile);
  /*    const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
      };
    try {
        let user = await User.findOne({ googleId: profile.id });
    
        if (user) {
          done(null, user);
        } else {
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      } */
}
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

/* passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
}); */

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import routes
const productsRoutes = require('./routes/products.routes');
const addProductRoutes = require('./routes/addProduct.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const { get404, globalError } = require('./controllers/error');

// MIDDLEWARES

/* if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} */

// Session
const store = new MongoStore({
  collection: 'sessions',
  uri: process.env.MONGO_URI,
});

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
);

app.use(isAuth);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global user
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
);

app.use('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error', successRedirect: '/' }), (req, res) => {
  console.log('something');
});
app.use(productsRoutes);
app.use(addProductRoutes);
app.use('/user', userRoutes);
app.use(authRoutes);

app.use(get404);
app.use(globalError);

const DB = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on ${port}...`);
    });

    console.log('DB connection succesfully');
  })
  .catch(err => {
    console.log(err);
  });
