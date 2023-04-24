const { response, request } = require("express");

///modelos o tablas
const { correspondencias }  = require('../models/correspondencia');
const { dependencias } = require("../models/dependencias");
const { adjuntos } = require("../models/adjuntos");

///conexiones a BD
const Sequelize  = require('sequelize');
const { dbConnection } = require("../database/config");


const Op  = Sequelize.Op;




const buscaCorrespondencia = async(req = request, res= response) =>  {
    
    //$Consulta="Select * from Correspondencias where FolioRemitente=''Req.;
    console.log(req.query);
    const { folio = '' }  = req.query;
    const folioCorrespondencia = await correspondencias.findAll({
        where :    
           { 
             FolioRemitente : folio, 
           },
           limit : 10,
    })

    let totalHombres=200;
    let total=300;
    let totalLicitaciones = (totalHombres * 100 / total).toFixed(2) ;
    
    
    res.status(200).json({
        folioCorrespondencia
     })

}

const buscaFolioCorrespondencia = async(req = request, res= response) =>  {
    
    const { id:folio='' }  = req.params;
    let respuesta = [];
    //console.log(folio);

    /*if (folio===0 || folio==='')
    {
        res.status(500).json({
            msg : 'Sin datos'
         })
    }*/

    correspondencias.belongsTo(dependencias, {foreignKey: 'IdUbicacion'});
    dependencias.hasOne(correspondencias, {foreignKey : 'IdUbicacion', targetKey : 'IdUbicacion'} );
    
    /*correspondencias.belongsTo(adjuntos, {foreignKey: 'IdCorrespondencia'});
    adjuntos.hasMany(correspondencias, {foreignKey : 'IdCorrespondencia', targetKey : 'IdCorrespondencia'} );*/

    const folioCorrespondencia = await correspondencias.findAll({
        where :    
           { 
             FolioRemitente : folio, 
           },
           limit : 1,
        include : [{ model : dependencias, required : true}],
    })

    let IdCorrespondencia='0';
    
    if (folioCorrespondencia[0])
    {
        IdCorrespondencia=folioCorrespondencia[0].dataValues.IdCorrespondencia;
    
    }
    const archivosAdjuntos = await adjuntos.findAll({
        where :    
           { 
             IdCorrespondencia 
           },
            
    })
    
    respuesta[0]={...folioCorrespondencia};
    respuesta[1]={...archivosAdjuntos};
    
    res.status(200).json({
        folioCorrespondencia, 
        archivosAdjuntos
        //respuesta
     })

}


module.exports = {

    buscaCorrespondencia, buscaFolioCorrespondencia
}


