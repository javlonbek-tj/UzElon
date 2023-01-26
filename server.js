const mongoose = require('mongoose');
const dotenv = require('dotenv');

/* process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
}); */
dotenv.config();
const app = require('./app');

const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(() => {
  console.log('DB connection succesful');
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});

/* process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
}); */
