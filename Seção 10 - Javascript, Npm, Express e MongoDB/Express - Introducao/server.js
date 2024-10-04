const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/contato', (req, res) => {
    res.send("Contato acessado");
});

app.listen(3000, () => {
    console.log('Servidor Executando!');
});