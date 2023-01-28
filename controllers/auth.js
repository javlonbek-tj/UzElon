const getSignUp = (req, res, next) => {
  try {
    res.render('user/signup', {
      pageTitle: 'AvtoVodil',
    });
  } catch (err) {
    console.log(err);
  }
};
const getLogin = (req, res, next) => {
  try {
    res.render('user/login', {
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
