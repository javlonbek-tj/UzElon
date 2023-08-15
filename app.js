const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { isAuth } = require('./controllers/auth');
const upload = require('./utils/fileUpload');
const compression = require('compression');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

// Import routes
const productsRoutes = require('./routes/products.routes');
const addProductRoutes = require('./routes/addProduct.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/auth.routes');
const { get404, globalError } = require('./controllers/error');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// MIDDLEWARES

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(compression());

app.use(isAuth);

// Set global user
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use(
  upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'picture' }]),
);

// ROUTES
app.use(productsRoutes);
app.use(addProductRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use(authRoutes);

app.use(get404);
app.use(globalError);

module.exports = app;
