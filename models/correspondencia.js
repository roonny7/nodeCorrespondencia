const { Sequelize }  = require('sequelize');
const { dbConnection }  = require('../database/config');

var correspondencias = dbConnection.define("Correspondencias", {
  IdCorrespondencia : {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,     
      
  },
  FolioRemitente: {
      type: Sequelize.STRING,
      allowNull: true
  },
  Asunto: {
      type: Sequelize.STRING,
      allowNull: false
  },
  Fecha: {
      type: Sequelize.DATE,
      allowNull: false
  },
  IdTipo: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Contenido: {
    type: Sequelize.STRING,
    allowNull: false
  },
  NombreRemitente: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  Contenido: {
    type: Sequelize.STRING,
    allowNull: false
  },  
}, {
  modelName: "Correspondencias",
  timestamps: false   
});

module.exports = { 
    correspondencias,
}
