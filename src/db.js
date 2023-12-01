const { Sequelize } = require('sequelize');
const database = new Sequelize('MindApp', 'MindApp', 'mindapp',{
    dialect: 'mysql', host: 'localhost', port: 3306,
    });

database.sync();

module.exports = database;
