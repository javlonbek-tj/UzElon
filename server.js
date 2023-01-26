const mongoose = require('mongoose');
const dotenv = require('dotenv');

/* process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
}); */
dotenv.config();
const app = require('./app');

const DB = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose.connect(DB).then(() => {
  app.listen(port, () => {
    console.log(`App running on ${port}...`);
  });
  console.log('DB connection succesfully');
});


/* process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
}); */
