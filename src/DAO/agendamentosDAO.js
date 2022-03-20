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
                        "agendamento": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaClienteId = (ID_CLIENTE)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM AGENDAMENTOS WHERE ID_CLIENTE = ?',
            ID_CLIENTE,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "agendamento": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    insereAgendamento = (novoAgendamento) =>{

        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO AGENDAMENTOS (CLIENTE, DATA, PROFISSIONAL, PERÍODO, SERVIÇO, OBSERVAÇÕES) VALUES (?, ?, ?, ?, ?, ?)",
            novoAgendamento.cliente, novoAgendamento.data, novoAgendamento.profissional, novoAgendamento.período, novoAgendamento.serviço, novoAgendamento.observações,
                (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Seu agendamento foi marcado com sucesso! Obrigado ${novoAgendamento.cliente}.`)
                }
            })
        })

    }

    deletaAgendamento = (ID_CLIENTE)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM AGENDAMENTOS WHERE ID_CLIENTE = ?',
            ID_CLIENTE,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "agendamento": `Seu agendamento de id ${ID_CLIENTE} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaAgendamento = (ID_CLIENTE, agendamento)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE AGENDAMENTOS SET CLIENTE = ?, DATA = ?, PROFISSIONAL = ?, PERÍODO = ?, SERVIÇO = ?, OBSERVAÇÕES = ? WHERE ID_CLIENTE = ?',
            agendamento.cliente, agendamento.data, agendamento.profissonal, agendamento.período, agendamento.serviço, agendamento.observações,
            ID_CLIENTE,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Olá ${agendamento.cliente}, seu agendamento de id ${ID_CLIENTE} foi atualizado com sucesso`,
                        "agendamento": agendamento,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default AgendamentosDAO