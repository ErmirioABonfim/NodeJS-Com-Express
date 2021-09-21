

var mysql = require('mysql');

var conexao = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "ixvq10",
    database : "agenda-petshop"
})

module.exports = conexao;


// var connection = mysql.connection({
//     host = "http://localhost",
//     user = "root",
//     password = "ixvq10",
//     database = "agenda-petshop"
// })

// connection.connect();

// connection.query('select * from atendimentos ', function(error, results, fields){
//     if(error) throw error;
//     console.log("The solution is: ", results[0])
// })