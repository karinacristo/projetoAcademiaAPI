import AgendamentosDAO from "../DAO/agendamentosDAO.js"
import AgendamentosSchema from './schema/AgendamentosSchema.js'

class Agendamentos {
    constructor(db){
        this.dao = new AgendamentosDAO(db)
    }

    todosAgendamentos = async () => {
        try {
            return await this.dao.todosAgendamentos()
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    pegaUmCliente = async (cliente) => {
        try {
            return await this.dao.pegaUmCliente(cliente)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }
    
    pegaClienteId = async (ID_CLIENTE) => {
        try {
            return await this.dao.pegaClienteId(ID_CLIENTE)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    insereAgendamento = async (agendamento) => {
        try {
            const novoAgendamento = new AgendamentosSchema(agendamento.cliente, agendamento.data, agendamento.profissional, agendamento.período, agendamento.serviço, agendamento.observações)
            return await this.dao.insereAgendamento(novoAgendamento)
        } catch (error) {
            throw new Error (error.mensagem)
        }
    }

    deletaAgendamento = async (ID_CLIENTE) => {
        try {
            await this._verificaAgendamento(ID_CLIENTE)
            return await this.dao.deletaAgendamento(ID_CLIENTE)  
        } catch (error) {
            return {
                "mensagem" : error.message,
                "erro" : true
            }
        }
    }

    atualizaAgendamento = async (ID_CLIENTE, agendamento) => {
        try {
            await this._verificaAgendamento(ID_CLIENTE)
            const agendamentoAtualizado = new AgendamentosSchema(agendamento.cliente, agendamento.data, agendamento.profissonal, agendamento.período, agendamento.serviço, agendamento.observações)
            return await this.dao.atualizaAgendamento(ID_CLIENTE, agendamentoAtualizado)
        } catch (error) {
            return ({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    }

    _verificaAgendamento = async (ID_CLIENTE) => {
        const resposta = await this.dao.pegaClienteId(ID_CLIENTE)
        if(resposta.agendamento.length === 0){
            throw new Error (`O agendamento de id ${ID_CLIENTE} não existe`)
        }
    }

}

export default Agendamentos