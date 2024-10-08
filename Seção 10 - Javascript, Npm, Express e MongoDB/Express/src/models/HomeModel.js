const mongoose = require('mongoose');

const HomeScheema = new mongoose.Schema({ //CRIANDO MODEL COM MONGOOSE
    titulo: { type: String, required: true }, //PODE NAS PROPRIEDADES DO CAMPO DO DOCUMENTO PODE SER PASSADO QUE O CAMPO É REQUERIDO
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeScheema); //CRIA O MODEL DO TIPO HOME USANDO O SCHEEMA CRIADO

module.exports = HomeModel;