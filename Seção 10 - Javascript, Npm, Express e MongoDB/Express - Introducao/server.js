const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Olá mundo</button>
        </form>
        `);
});

app.get('/contato', (req, res) => {
    res.send("Contato acessado");
});

app.listen(3000, () => {
    console.log('Servidor Executando!');
});