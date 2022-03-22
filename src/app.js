import express from "express";
import agendamentosController from "./controller/agendamentosController.js"
import database from "./database/sqlite-db.js";

const app = express();
app.use(express.json());

agendamentosController(app, database);

export default app;