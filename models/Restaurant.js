const {sequelize, DataTypes } = require('../db.js');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define("Restaurant",{
    title: DataTypes.STRING
})

module.exports = {Restaurant};