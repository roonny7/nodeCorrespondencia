const express = require('express');
//var cors  = require('cors');
const Sequelize = require('sequelize');

const  { dbConnection }   = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = 4000;


        this.paths = {
            reportes : '/api/reportes/'
        }

        this.conectarDB();

        this.middlewares();

        this.routes();

        //console.log(dbConnection.connectionManager.config);
        

    }


    routes() {

        this.app.get('/',  (req, res) => {
            res.send('Hello nigga')
          })
          
          
        this.app.use(this.paths.reportes, require('../routes/buscar'));
       
        
    }



    middlewares() {

        //CORS
        //this.app.use(cors({ exposedHeaders : ['Content-Range']}));

        //lectura y parseo del body, que venga de put, post, delete
        this.app.use(express.json());

       //directorio público
        this.app.use(express.static('public'));

               

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en ', this.port);
        })
    }

    async conectarDB() {
        await dbConnection.authenticate()
        .then(() => { console.log("ya se conectó ")});
      
    }

}

module.exports = Server;