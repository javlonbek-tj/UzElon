const get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
  });
};

const sendErrorDev = (error, req, res) => {
  console.log(error);
  return res.status(error.statusCode).render('error', {
    pageTitle: 'Something went wrong!',
    msg: error.message,
  });
};

const sendErrorProd = (error, req, res) => {
  // A) Operational, trusted error: send message to client
  if (error.isOperational) {
    return res.status(error.statusCode).render('error', {
      pageTitle: 'Something went wrong!',
      msg: error.message,
    });
  }
  // B) Programming or other unknown error
  // 1) Log error
  console.log(error);
  // 2) Send generic message
  res.status(error.statusCode).render('error', {
    paheTitle: 'Something went wrong!',
    msg: 'Please try again later.',
  });
};

const globalError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(error, req, res);
  }
};

module.exports = {
  get404,
  globalError,
};
