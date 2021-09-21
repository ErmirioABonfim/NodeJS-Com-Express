const express = require("express"); // Estudar express que é um servidor
const consign = require('consign'); //Estudar Consign
const bodyParser = require("body-parser"); //Converte o corpo da requisição para formatos desejados


module.exports = () => {

    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .into(app)
    
    return app;
}


 