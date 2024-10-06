const express = require('express');
const route = express.Router();
const homeController = require('./src/controller/homeController');

function middlaware(req, res, next) {
    console.log();
    console.log('Passei no middleware');
    console.log();
    next(); //PARA OS MIDDLEWARES PRECISA DO NEXT PARA CONTINUAR A EXECUÇÃO
}

route.get('/', middlaware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

module.exports = route;