const agendamentosController = app => {

    app.get('/agendamentos', (req, res) => {
        res.json({
            "nome" : "karina"
        })
    })

    app.post('/agendamentos', (req, res) => {
        res.json({
            "mensagem" : "seu agendamento foi salvo com sucesso!"
        })
    })
}

export default agendamentosController