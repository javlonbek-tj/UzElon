const express = require('express');
const morgan = require('morgan');

const app = express();

// MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`__dirname/public`));

// ROUTES
