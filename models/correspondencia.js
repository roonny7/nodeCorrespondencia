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
  Referencia: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  FechaLimite: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  Titular: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  Cargo: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  Destinatario: {
    type: Sequelize.STRING,
    allowNull: false,
    field : 'Favor'
  },  
}, {
  modelName: "Correspondencias",
  timestamps: false   
});

module.exports = { 
    correspondencias,
}
