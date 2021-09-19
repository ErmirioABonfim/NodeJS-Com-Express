const customExpress = require('./config/customExpress');
const bodyParser = require('body-parser');

const app = customExpress();
const port = 3001;
var msg = require('./testes/teste');

var soma01 = require('./testes/teste');

var result01 = new soma01(3,7);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`+ ` Soma 3 + 7 = ${result01.result()}`);
});



