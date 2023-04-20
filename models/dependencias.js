const { Sequelize }  = require('sequelize');
const { dbConnection }  = require('../database/config');

var dependencias = dbConnection.define("Ubicaciones", {
  IdUbicacion : {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,     
      
  },
  Descripcion: {
      type: Sequelize.STRING,
      allowNull: true
  },
  Estado: {
      type: Sequelize.STRING,
      allowNull: false
  },
  
  
}, {
  modelName: "Ubicaciones",
  timestamps: false   
});

module.exports = { 
    dependencias,
}
