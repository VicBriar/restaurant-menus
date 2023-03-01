const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// Done - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite"
})

module.exports = {
    sequelize,
    DataTypes
};
