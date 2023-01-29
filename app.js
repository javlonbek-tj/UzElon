const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const productsRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(productsRoutes);
app.use(userRoutes);
app.use(authRoutes);

const DB = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose.connect(DB).then(() => {
  app.listen(port, () => {
    console.log(`App running on ${port}...`);
  });

  console.log('DB connection succesfully');
});
