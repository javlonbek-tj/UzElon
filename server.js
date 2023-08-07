const http = require( 'http');
const app = require( './app');
const mongoConnect = require('./config/mongo');
const logger = require( './config/logger');

process.on('uncaughtException', err => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

const { config } = require( 'dotenv';
config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();

process.on('unhandledRejection', err => {
  logger.error('Unhandled rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});
