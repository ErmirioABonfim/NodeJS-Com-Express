const moment = require("moment")
const conexao = require("../infraestrutura/conexao")

class Atendimento {
    adiciona(atendimento, res){
        const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
        const data = moment(atendimento.data, "DD-MM-YYYY").format("YYYY-MM-DD HH:MM:SS");
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {   
                nome: 'data',
                valido: dataEhValida,
                mensagem:  "Data deve ser maior que a atual"
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: "Nome cliente deverá ter mais que 4 caractéres"
            }
        ]

        const erros =  validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length > 0;

        if (existemErros){
            res.json(erros)
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao,data};
            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(atendimento);
                
             }
        });
        }

        
    }

    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erros, resultados) => {
            if(erros){
                res.status(400).json();
            }else{
                res.status(200).json(resultados);
            }


        })
    }

    buscarPorId(res,id){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;
        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(atendimento);
            }
        })
    }
    
    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, "DD-MM-YYYY").format("YYYY-MM-DD HH:MM:SS");
        }
        const sql = "UPDATE Atendimentos SET ? WHERE id= ? "
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(202).json({...valores, id});
            }
        });
    }

    delete(id, res){
        const sql = "DELETE FROM Atendimentos WHERE id=?"
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json();
            }else{
                res.status(200).json({id});
            }
        })

    }

}

module.exports = new Atendimento;