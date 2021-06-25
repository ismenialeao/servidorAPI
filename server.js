const { response } = require('express')
const express = require('express') // exportando o express prodocumento
const app = express()  //iniciando o express

const estados = require("./estados-cidades.json")

app.get("/estados/todos",(request, response) =>{
    response.status(200).send(estados) //send para qualquer coisa e json p retornar um json p usuario
})

app.get( "/estados/todos/:sigla",(request, response) =>{
    const sigla = request.params.sigla
    console.log(sigla)
    console.log(require.params)
    response.status(200).send(estados.find(estados => estados.sigla === sigla))

})


app.listen(8080, () =>{                               // porta para ser escutada
    console.log('Servidor rodando na porta 8080')
})
