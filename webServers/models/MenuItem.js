const {sequelize, DataTypes, Model} = require('sequelize');
const sequelizeConnect = require('../sequelize-connect');

class MenuItem extends Model {}

MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, {
    sequelize: sequelizeConnect,
    timestamps: false,
});

module.exports = MenuItem