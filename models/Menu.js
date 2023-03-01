const {sequelize, DataTypes } = require('../db.js');
const { Sequelize } = require('sequelize');

// Done - create a Menu model
const Menu = sequelize.define("Menu",{
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING
})

module.exports = {Menu};