const db = require('../config/database');
const Ninja = require('../models/Ninja');
const Sequelize = require('sequelize');


module.exports.error = (req, res, next) => {
    res.send('Page not Found');
}

module.exports.test = (req, res, next) => {
    // res.send('Page not Found');

    Ninja.findAll()
        .then((ninjas) => {
            res.send(ninjas)
        })
        .catch((err) => {
            console.log('some error is occured' + err);
            res.send('some error is occured from test catch')
        })

}