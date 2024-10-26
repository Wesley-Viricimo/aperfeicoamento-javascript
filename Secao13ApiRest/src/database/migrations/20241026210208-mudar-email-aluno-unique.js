"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn(
      {
        schema: "escola", //DEFININDO O SCHEMA NO QUAL O BANCO DE DADOS ESTÁ
        tableName: "alunos", //TABELA QUE POSSUI A COLUNA QUE SERÁ ALTERADA
      },
      "email", //COLUNA QUE SERÁ ALTERADA
      {  //DENTRO DAS CHAVES DEVE SER ESPECIFICADO AS NOVAS PROPRIEDADES DA COLUNA
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    );
  },

  async down() {},
};
