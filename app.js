const express = require('express');
const morgan = require('morgan');
const path = require('path');

const homeRoutes = require('./routes/home.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(userRoutes);

// ROUTES


module.exports = app;