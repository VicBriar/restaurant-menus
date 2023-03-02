const {sequelize, DataTypes } = require('../db.js');
const { Sequelize } = require('sequelize');

// Done - create a Menu model
const Menu = sequelize.define("Menu",{
    title: DataTypes.STRING
})

module.exports = {Menu};