const { DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Payment = db.define('payment', {
    id_payment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    coupon: {
        type: DataTypes.STRING,
    },
    bank: {
        type: DataTypes.STRING,
    },
});

module.exports = Payment;
