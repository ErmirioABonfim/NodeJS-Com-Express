const bodyParser = require("body-parser");
const path = require("path");
const { altera } = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos")


module.exports = app =>{
    app.get('/atendimentos',(req, res)=>{
        Atendimento.lista(res)  
    });

    
    app.get('/atendimentos/:id', (req, res)=> {
        const id = parseInt(req.params.id);
        Atendimento.buscarPorId(res,id);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        console.log(req.body)
        const id = parseInt(req.params.id);
        const valores = req.body ;
        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id',(req, res) =>{
        const id = parseInt(req.params.id);
        Atendimento.delete(id,res)
    })

    
}