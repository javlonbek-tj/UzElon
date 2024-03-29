const mongoose = require('mongoose');
const logger = require('../utils/logger');

const { config } = require('dotenv');
config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
});

mongoose.connection.on('error', err => {
  logger.error('Error in connection to database:', err);
});

mongoose.set('strictQuery', false);

function mongoConnect() {
  try {
    mongoose.connect(MONGO_URI);
  } catch (err) {
    logger.error('Error in connection to database:', err);
  }
}
module.exports = mongoConnect;
