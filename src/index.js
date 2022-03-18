import express from "express";

const app = express()
const porta = 3010

app.listen(porta, () => {
    console.log('o servidor no localhost está ok!')
})