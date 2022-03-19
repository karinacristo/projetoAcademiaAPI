import express from "express";
import agendamentosController from "./controller/agendamentosController.js";
import agendamentosMiddleware from "./middleware/agendamentosMiddleware.js";
import generalMiddleware from "./middleware/generalMiddleware.js";
import database from "./database/sqlite-db.js";


const app = express()
const porta = 3010

app.use(express.json())

agendamentosController(app, database)
agendamentosMiddleware(app)
generalMiddleware(app)

app.listen(porta, () => {
    console.log('o servidor no localhost está ok!')
})