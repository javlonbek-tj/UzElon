const AppError = require('../utils/appError');

const get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Sahifa topilmadi',
  });
};

const handleLargeFileSize = () => {
  const message = 'Rasm hajmi 2 mb dan oshmasligi kerak!';
  return new AppError(message, 400);
};

const sendErrorDev = (error, req, res) => {
  console.log(error);
  return res.status(error.statusCode).render('error', {
    pageTitle: 'Xatolik!',
    msg: error.message,
  });
};

const sendErrorProd = (error, req, res) => {
  // A) Operational, trusted error: send message to client
  if (error.isOperational) {
    return res.status(error.statusCode).render('error', {
      pageTitle: 'Xatolik!',
      msg: error.message,
    });
  }
  // B) Programming or other unknown error
  // 1) Log error
  console.log(error);
  // 2) Send generic message
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
