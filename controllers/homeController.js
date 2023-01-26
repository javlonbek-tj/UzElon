const getAllProducts = (req, res, next) => {
    res.render('products/home', {
       pageTitle: "AvtoVodil",

    });
};

module.exports = {
    getAllProducts
};