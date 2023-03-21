const Sequelize  = require('sequelize');

const dbConnection = new Sequelize('sistema_correspondencia', 'root', '', {
    host : 'localhost',
    dialect : 'mysql',
    //logging : false,
});

module.exports = {
    dbConnection
}