const {sequelize, DataTypes } = require('../db.js');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define("Restaurant",{
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

module.exports = {Restaurant};