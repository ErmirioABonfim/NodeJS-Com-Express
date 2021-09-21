

class tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarAtendimento();
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int not NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar (20) not null, data  datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar (20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("tabela atendimento criada com sucesso")
            }
        })
    }
}

module.exports = new tabelas;