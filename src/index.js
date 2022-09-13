const express = require('express')
const app = express();

//porta para conexão localhost
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000') //mensagem para aparecer no terminal sinalizando servidor up
})

//Método de Criação
app.get('/clientes', function (request, response) {
    return response.json(['Bradesco', 'Santander', 'Itau'])
})

//Método de Modificação
app.put('/clientes/:id', function (request, response) {
    return response.json(['Caixa Econômica', 'Santander', 'Itau'])
})

//Método de Exclusão
app.delete('/clientes/:id', function (request, response) {
    return response.json(['Caixa Econômica', 'Itau'])
})