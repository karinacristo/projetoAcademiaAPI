const agendamentosController = app => {
    app.get('/agendamentos', (req, res) => {
        res.send('rodando GET na rota atendimentos')
    })
}

export default agendamentosController