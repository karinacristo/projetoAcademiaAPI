class AgendamentosSchema {
    constructor(cliente, data, profissional, período, serviço, observações){
        this.cliente = cliente
        this.data = data
        this.profissional = profissional
        this.período = período
        this.serviço = serviço
        this.observações = observações
    }
}

export default AgendamentosSchema