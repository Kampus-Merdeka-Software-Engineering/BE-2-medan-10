const { DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Hotel = db.define('hotel', {
    id_hotel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
});

module.exports = Hotel;
