require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;
mongoose.connect(connectionString) //COMO O MÉTODO CONNECT RETORNA UMA PROMISE O MÉTODO THEN PODE SER CHAMADO
    .then(() => {
        app.emit('conexão pronta!'); //APÓS A CONEXÃO SER REALIZADA O APP IRÁ EMITIR UMA MENSAGEM
    }).catch(e => console.log('houve um erro: ', e));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public'))); //SETANDO PASTA PUBLIC RESPONSÁVEL POR ARMAZENAR CONTEÚDOS ESTÁTICOS (CSS, JAVASCRIPT, IMAGENS E ETC)

app.set('views', path.resolve(__dirname, 'src', 'views')); //SETANDO PARA O EXPRESS QUE SERÁ UTILIZADA UMA CAMADA VIEW E INDICANDO O CAMINHO ABSOLUTO DA PASTA (NESTE CASO ESTÁ DENTRO DE SRC)
app.set('view engine', 'ejs'); //INDICANDO QUE A ENGINE UTILIZADA NA CAMADA DE VIEW SERÁ EJS
app.use(routes);

app.on('conexão pronta!', () => { //QUANDO A MENSAGEM DISPARADA NA CONEXÃO FOR RECEBIDA, INDICANDO QUE A CONEXÃO FOI REALIZADA, O SERVIDOR SERÁ INICIADO
    app.listen(3000, () => {
        console.log('Servidor Executando!');
    });
});
