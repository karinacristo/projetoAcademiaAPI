import express from "express";
import agendamentosController from "./controller/agendamentosController.js";

const app = express()
const porta = 3010
agendamentosController(app)

app.listen(porta, () => {
    console.log('o servidor no localhost está ok!')
})