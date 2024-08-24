const http = require("http");

//criando servidor e rodando na porta 8181
http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao site!</h1>");
}).listen(8181);
console.log("Servidor está rodando");