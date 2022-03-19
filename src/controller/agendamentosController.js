import Agendamentos from "../model/Agendamentos.js"

const agendamentosController = (app, bancoDeDados) => {

    const agendamentoModel = new Agendamentos(bancoDeDados)

    app.get('/agendamentos', async (req, res) => {
        try {
            const resposta = await agendamentoModel.todosAgendamentos()
            res.status(200).json({
                "agendamento" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json ({
                "mensagem" : error.message,
                "erro" : true
            })
        }    
    })

    app.get('/agendamentos/cliente/:cliente', async (req, res) => {
            const cliente = req.params.cliente
            res.json(await agendamentoModel.pegaUmCliente(cliente))
    })

    app.post('/agendamentos', async (req, res) => {
        const body = req.body
        try {
            const resposta = await agendamentoModel.insereAgendamento(body)
            res.status(201).json({
                "mensagem" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }   
    })

    app.delete('/agendamentos/ID_CLIENTE/:ID_CLIENTE', async (req, res) => {
        const id = req.params.ID_CLIENTE
        res.json(await agendamentoModel.deletaAgendamento(id))
    })

    app.put('/agendamentos/ID_CLIENTE/:ID_CLIENTE', async (req, res) => {
        const id = req.params.ID_CLIENTE 
        const body = req.body
        res.json(await agendamentoModel.atualizaAgendamento(id, body))
    })
}

export default agendamentosController