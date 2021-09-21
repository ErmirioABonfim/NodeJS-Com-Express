const customExpress = require('./config/customExpress');
const bodyParser = require('body-parser');
const conexao = require("./infraestrutura/conexao")
const Tabelas = require("./infraestrutura/tabelas")


conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("conectado com sucesso")
        Tabelas.init(conexao);
        const app = customExpress();
        const port = 3001;

        app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`+ ` Soma 3 + 7 = ${result01.result()}`);
});
    }
})



var soma01 = require('./testes/teste');

var result01 = new soma01(3,7);




