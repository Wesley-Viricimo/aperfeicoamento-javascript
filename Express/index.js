const express = require("express"); //Importando o express;
const app = express();//Iniciando o express e passando esta inicialização para a variável app;

app.get("/",function(req, res){
    res.send("<h1>Seja bem vindo!</h1>")
})

app.get("/blog", function(req, res){
    res.send("<h1>Bem vindo ao meu blog!</h1>");
})

//Abrindo um servidor express ultilizando o método listen e passando como parâmetro a porta em que irá rodar o servidor e uma função que receberá um parâmetro de erro caso ocorra;
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})