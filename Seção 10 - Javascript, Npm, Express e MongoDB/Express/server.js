require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;
mongoose.connect(connectionString) //COMO O MÉTODO CONNECT RETORNA UMA PROMISE O MÉTODO THEN PODE SER CHAMADO
    .then(() => {
        app.emit('conexão pronta!'); //APÓS A CONEXÃO SER REALIZADA O APP IRÁ EMITIR UMA MENSAGEM
    }).catch(e => console.log('houve um erro: ', e));

const session = require('express-session'); //EXPRESS SESSION SERVE PARA ARMAZENAMENTO DE INFORMAÇÕES QUE SERÁ GUARDADA PELO TEMPO QUE FOR CONFIGURADO ENQUANTO A SESSÃO EXISTIR
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); //FLASH É UM RECURSO DE MENSAGEM QUE PODERÁ SER CONSUMIDA APENAS UMA VEZ E APÓS SER CONSUMIDA NÃO SERÁ MAIS EXIBIDA

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public'))); //SETANDO PASTA PUBLIC RESPONSÁVEL POR ARMAZENAR CONTEÚDOS ESTÁTICOS (CSS, JAVASCRIPT, IMAGENS E ETC)

const sessionOptions = session({
    secret: 'sdfsdfsdfsdfsdf',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //CONFIGURADO TEMPO DE DURAÇÃO DAS INFORMAÇÕES ARMAZENADAS EM SESSÃO PARA 7 DIAS
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //SETANDO PARA O EXPRESS QUE SERÁ UTILIZADA UMA CAMADA VIEW E INDICANDO O CAMINHO ABSOLUTO DA PASTA (NESTE CASO ESTÁ DENTRO DE SRC)
app.set('view engine', 'ejs'); //INDICANDO QUE A ENGINE UTILIZADA NA CAMADA DE VIEW SERÁ EJS
app.use(routes);

app.on('conexão pronta!', () => { //QUANDO A MENSAGEM DISPARADA NA CONEXÃO FOR RECEBIDA, INDICANDO QUE A CONEXÃO FOI REALIZADA, O SERVIDOR SERÁ INICIADO
    app.listen(3000, () => {
        console.log('Servidor Executando!');
    });
});
