import express from "express";
import agendamentosController from "./controller/agendamentosController.js";
import agendamentosMiddleware from "./middleware/agendamentosMiddleware.js";

const app = express()
const porta = 3010
app.use(express.json())
agendamentosController(app)
agendamentosMiddleware(app)

app.listen(porta, () => {
    console.log('o servidor no localhost está ok!')
})