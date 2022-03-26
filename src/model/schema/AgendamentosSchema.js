class AgendamentosSchema {
    constructor(cliente, data, profissional, período, serviço, observações){
        this.cliente = this._validaCliente(cliente)
        this.data = data
        this.profissional = profissional
        this.período = período
        this.serviço = serviço
        this.observações = observações
    }
    _validaCliente = (cliente)=>{
        if (cliente == null || cliente.length == 0) {
          throw new Error('Digite um nome válido')
        }
        return cliente
     }
}

export default AgendamentosSchema