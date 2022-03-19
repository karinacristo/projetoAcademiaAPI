import sqlite3 from 'sqlite3'
sqlite3.verbose()
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


const AGENDAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "AGENDAMENTOS" (
    "ID_CLIENTE" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CLIENTE" VARCHAR(100),
    "DATA" VARCHAR(50),
    "PROFISSIONAL" VARCHAR(100),
    "PERÍODO" VARCHAR(50),
    "SERVIÇO" VARCHAR(100),
    "OBSERVAÇÕES" VARCHAR(500)
  );`;

const ADD_AGENDAMENTOS_DATA = `
INSERT INTO AGENDAMENTOS (ID_CLIENTE, CLIENTE, DATA, PROFISSIONAL, PERÍODO, SERVIÇO, OBSERVAÇÕES)
VALUES 

    (1, 'Ana Amélia', '2022-04-01', 'Cinthia Cantú', 'Manhã', 'Dança', 'Queria uma hora de aula de funk'),
    (2, 'Carol Miranda', '2022-04-02', 'Felipe Campelo', 'Manhã', 'Ioga', 'Treino para reduzir o estresse'),
    (3, 'Letícia Santos', '2022-04-02', 'Inara Almeida', 'Noite', 'Musculação', 'Quero um treino intercalado'),
    (4, 'Luana Valle', '2022-04-03', 'Bruna Wesselka', 'Tarde', 'Aeróbicos', 'Queria ginástica, jump, spinning'),
    (5, 'Luziane Gering', '2022-04-03', 'Maíra Almeida', 'Tarde', 'Natação', 'Quero com rotina de hidroginástica'),
    (6, 'Nathália Alves', '2022-04-03', 'Felipe Campelo', 'Manhã', 'Ioga', 'Com meditação guiada'),
    (7, 'Rafaela Dias', '2022-04-04', 'Thomaz Albuquerque', 'Manhã', 'Artes Maciais', 'Duas sessões seguidas'),
    (8, 'Sarah Alves', '2022-04-04', 'Cinthia Cantú', 'Tarde', 'Crossfit', 'Adicionar levantamento de peso'),
    (9, 'Suzanne Patrícia', '2022-04-05', 'Felipe Campelo', 'Manhã', 'Ioga', 'Quero meditação'),
    (10, 'Thaís Carvalho', '2022-04-05', 'Bruna Wesselka', 'Noite', 'Ginástica', 'Todas as aulas completas'),
    (11, 'Vanessa Reis', '2022-04-06', 'Inara Almeida', 'Noite', 'Musculação', 'Com levantamento de peso')

`

function criaTabela() {
    db.run(AGENDAMENTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabela() {
    db.run(ADD_AGENDAMENTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}

db.serialize( ()=> {
    criaTabela();
    populaTabela();
});