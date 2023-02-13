const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { isAuth } = require('./controllers/auth');
const upload = require('./utils/fileUpload');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const dotenv = require('dotenv');

dotenv.config();

// Import routes
const productsRoutes = require('./routes/products.routes');
const addProductRoutes = require('./routes/addProduct.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const { get404, globalError } = require('./controllers/error');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Set security HTTP headers
app.use(helmet());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Data sanitization against XSS
app.use(xss());

app.use(compression());

// MIDDLEWARES

/* if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} */

app.use(isAuth);

// Set global user
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use(upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'picture' }]));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// ROUTES
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
