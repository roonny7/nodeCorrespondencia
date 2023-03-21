const { response, request } = require("express");
const { correspondencias }  = require('../models/correspondencia');
//const { anexos } = require("../models/anexos");;
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



module.exports = {

    buscaCorrespondencia
}


