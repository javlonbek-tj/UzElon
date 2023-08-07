const logger = require('../utils/logger');

const get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Sahifa topilmadi',
  });
};

const handleLargeFileSize = () => {
  const message = 'Rasm hajmi 2 mb dan oshmasligi kerak!';
  res.status(error.statusCode).render('error', {
    pageTitle: 'Xatolik!',
    msg: message,
  });
};

const sendErrorDev = (error, req, res) => {
  console.log(error);
  return res.status(error.statusCode).render('error', {
    pageTitle: 'Xatolik!',
    msg: error.message,
  });
};

const sendErrorProd = (error, req, res) => {
  logger.error(error);
  res.status(error.statusCode).render('error', {
    pageTitle: 'Xatolik!',
    msg: "Xatolik sodir bo'ldi. Iltimos qaytadan urinib ko'ring",
  });
};

const globalError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let err = { ...error };
    err.message = error.message;
    if (err.code === 'LIMIT_FILE_SIZE') {
      err = handleLargeFileSize();
    }
    sendErrorProd(err, req, res);
  }
};

module.exports = {
  get404,
  globalError,
};
