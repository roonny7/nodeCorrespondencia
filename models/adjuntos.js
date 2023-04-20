const { Sequelize }  = require('sequelize');
const { dbConnection }  = require('../database/config');

var adjuntos = dbConnection.define("Adjuntos", {
  IdAdjunto : {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,     
      
  },
  IdCorrespondencia: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,    
  },
  Descripcion: {
      type: Sequelize.STRING,
      allowNull: false
  },
  Tamanio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Anio: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  Mes: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  Hojas: {
    type: Sequelize.INTEGER,
    allowNull: false
  }, 
}, {
  modelName: "Adjuntos",
  timestamps: false   
});

module.exports = { 
    adjuntos,
}
