import Agendamentos from "../model/Agendamentos.js"

const agendamentosController = (app, bancoDeDados) => {

    app.get('/agendamentos', (req, res) => {
        const todosAgendamentos = bancoDeDados.agendamento
        res.json({
            "agendamento" : todosAgendamentos
        })
    })

    app.post('/agendamentos', (req, res) => {
        const body = req.body
        try {
            const novoAgendamento = new Agendamentos(body.cliente, body.data, body.profissional, body.período, body.serviço, body.observações)

            bancoDeDados.agendamento.push(novoAgendamento)

            res.json({
                "msg": "Agendamento marcado com sucesso",
                "agendamento": novoAgendamento,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
        
    })
}

export default agendamentosController