const sequelize = require ("sequelize");

const db = new sequelize("opulent","faryz","gampang123",{
    host:"localhost",
    dialect:"mysql",
    port:3306,
});

module.exports = db;