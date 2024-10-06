const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public'))); //SETANDO PASTA PUBLIC RESPONSÁVEL POR ARMAZENAR CONTEÚDOS ESTÁTICOS (CSS, JAVASCRIPT, IMAGENS E ETC)

app.set('views', path.resolve(__dirname, 'src', 'views')); //SETANDO PARA O EXPRESS QUE SERÁ UTILIZADA UMA CAMADA VIEW E INDICANDO O CAMINHO ABSOLUTO DA PASTA (NESTE CASO ESTÁ DENTRO DE SRC)
app.set('view engine', 'ejs'); //INDICANDO QUE A ENGINE UTILIZADA NA CAMADA DE VIEW SERÁ EJS
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor Executando!');
});