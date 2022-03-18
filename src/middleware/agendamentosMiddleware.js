const agendamentosMiddleware = app => {

    app.use('/agendamentos', (req, res, next)=>{
        // verificando o cliente
        if(req.method == "POST"){ 
            const body = req.body
            if(!body.cliente)
               res.json({

                   "Erro": "Campo obrigatório. Por favor, preencha o campo 'cliente'."
               })
            else
               next()
        }else{
            next()
        }
    })

    app.use('/agendamentos', (req, res, next)=>{
        // verificando o profissional
        if(req.method == "POST"){ 
            const body = req.body
            if(!body.profissional)
               res.json({

                   "Erro": "Campo obrigatório. Por favor, preencha o campo 'profissional'."
               })
            else
               next()
        }else{
            next()
        }
    })

    app.use('/agendamentos', (req, res, next)=>{
        // verificando a data
        if(req.method == "POST"){ 
            const body = req.body
            if(!body.data)
               res.json({

                   "Erro": "Campo obrigatório. Por favor, preencha o campo 'data'."
               })
            else
               next()
        }else{
            next()
        }
    })
}

export default agendamentosMiddleware