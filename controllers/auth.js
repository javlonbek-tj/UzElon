const getSignUp = (req, res, next) => {
  try {
    res.render('auth/signup', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};
const getLogin = (req, res, next) => {
  try {
    res.render('auth/login', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getSignUp,
  getLogin,
};
