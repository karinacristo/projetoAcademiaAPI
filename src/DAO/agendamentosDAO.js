class AgendamentosDAO{

    constructor(db){
        this.db = db
    }

    todosAgendamentos = ()=>{

        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM AGENDAMENTOS', (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    pegaUmCliente = (cliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM AGENDAMENTOS WHERE CLIENTE = ?',
            cliente,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "usuario": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaClienteId = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM USUARIOS WHERE ID = ?',
            id,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "usuario": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    insereAgendamento = (novoAgendamento) =>{

        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO AGENDAMENTOS(CLIENTE, DATA, PROFISSIONAL, PERÍODO, SERVIÇO, OBSERVAÇÕES) VALUES (?, ?, ?)",
            novoAgendamento.cliente, novoAgendamento.data, novoAgendamento.profissonal, novoAgendamento.período, novoAgendamento.serviço, novoAgendamento.observações,
                (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Seu agendamento foi marcado com sucesso! Obrigado ${novoAgendamento.cliente}.`)
                }
            })
        })

    }

    deletaAgendamento = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM USUARIOS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "usuario": `Seu agendamento de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaAgendamento = (id, agendamento)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE AGENDAMENTOS SET CLIENTE = ?, DATA = ?, PROFISSIONAL = ?, PERÍODO = ?, SERVIÇO = ?, OBSERVAÇÕES = ? WHERE ID = ?',
            agendamento.cliente, agendamento.data, agendamento.profissonal, agendamento.período, agendamento.serviço, agendamento.observações,
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Seu agendamento de id ${id} atualizado com sucesso`,
                        "usuario": agendamento,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default AgendamentosDAO