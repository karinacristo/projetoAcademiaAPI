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
    
    pegaClienteId = async (id) => {
        try {
            return await this.dao.pegaClienteId(id)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    insereAgendamento = async (novoAgendamento) => {
        try {
            const novoAgendamento = new AgendamentosSchema(novoAgendamento.cliente, novoAgendamento.data, novoAgendamento.profissonal, novoAgendamento.período, novoAgendamento.serviço, novoAgendamento.observações)
            return await this.dao.insereAgendamento(novoAgendamento)
        } catch (error) {
            throw new Error (error.mensagem)
        }
    }

    deletaAgendamento = async (id) => {
        try {
            await this._verificaAgendamento(id)
            return await this.dao.deletaAgendamento(id)  
        } catch (error) {
            return {
                "mensagem" : error.message,
                "erro" : true
            }
        }
    }

    atualizaAgendamento = async (id, agendamento) => {
        try {
            await this._verificaAgendamento(id)
            const agendamentoAtualizado = new AgendamentosSchema(novoAgendamento.cliente, novoAgendamento.data, novoAgendamento.profissonal, novoAgendamento.período, novoAgendamento.serviço, novoAgendamento.observações)
            return await this.dao.atualizaAgendamento(id, agendamentoAtualizado)
        } catch (error) {
            return ({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    }

    _verificaAgendamento = async (id) => {
        const resposta = await this.dao.pegaClienteId(id)
        if(resposta.agendamento.length === 0){
            throw new Error (`O agendamento de id ${id} não existe`)
        }
    }

}

export default Agendamentos