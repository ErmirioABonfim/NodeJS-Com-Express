const bodyParser = require("body-parser");



module.exports = app =>{
    app.get('/atendimentos',(req, res)=>{
        res.status(200);
        res.send("Você está na rota atendimentos, e está realizando um GET");
    
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.status(200);
        res.send(req.body)
    })
    
    });
}