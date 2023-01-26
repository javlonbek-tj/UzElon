const Flat = require('../models/home/flat.model');
const House = require('../models/home/house.model');

const getAddProduct = (req, res, next) => {
    res.render('user/add-product', {
       pageTitle: "Add product",

    });
};
const getFlatCategory = (req, res, next) => {
    res.render('estate/flat-category', {
       pageTitle: "Add product",
    });
};
const getHouseCategory = (req, res, next) => {
    res.render('estate/house-category', {
       pageTitle: "Add product",
    });
};

const postAddProduct = (req, res, next) => {
    const productType = req.body.productType;
    console.log(productType);
    if(productType === 'flat') {
        const flatHas = [];
        const {rentOrSell, shortInfo, rooms, floors, floor, area, flatCondition, address, price, phoneNumber} = req.body;
        const {airConditioning, freeze, furniture, tv, washing} = req.body;
        if(airConditioning) {
            flatHas.push(airConditioning);
        }
        if(freeze) {
            flatHas.push(freeze);
        }
        if(furniture) {
            flatHas.push(furniture);
        }
        if(tv) {
            flatHas.push(tv);
        }
        if(washing) {
            flatHas.push(washing);
        }
        const flat = new Flat({
            shortInfo: shortInfo,
            rooms: rooms,
            floors: floors,
            floor: floor,
            area: area,
            flatCondition: flatCondition,
            address: address,
            price: price,
            phoneNumber: phoneNumber,
            rentOrSell: rentOrSell,
            flatHas: flatHas
        });
        flat.save().then(() => {
            res.redirect('/');
        }).catch(err => {
        console.log(err);
        });
    }
    if(productType === 'house') {
        const houseHas = [];
        const {rentOrSell, shortInfo, rooms, area, houseCondition, address, price, phoneNumber} = req.body;
        const {gas, electricity} = req.body;
        if(gas) {
            houseHas.push(gas);
        }
        if(electricity) {
            houseHas.push(electricity);
        }
        const house = new House({
            shortInfo: shortInfo,
            rooms: rooms,
            area: area,
            houseCondition: houseCondition,
            address: address,
            price: price,
            phoneNumber: phoneNumber,
            houseHas: houseHas,
            rentOrSell: rentOrSell
        });
        house.save().then(() => {
            res.redirect('/');
        }).catch(err => {
        console.log(err);
        });
    }
};

module.exports = {
    getAddProduct,
    getFlatCategory,
    postAddProduct,
    getHouseCategory
};