"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable(
      "fotos",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        originalname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        filename: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        aluno_id: { //COLUNA ALUNO ID SERÁ CHAVE ESTRANGEIRA DA TABELA, REFERENCIANDO A TABELA ALUNOS
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { //REFERENCIANDO QUE SERÁ UMA CHAVE ESTRANGEIRA
            model: 'alunos', //PRECISA PASSAR O NOME DO MODEL
            key: 'id' //CHAVE DE RELACIONAMENTO SERÁ O ID
          },
          onDelete: 'CASCADE', //CASCADE FARÁ COM QUE CASO O ALUNO SEJA DELETADO, TODAS AS FOTOS DELE SERÃO APAGADAS,
          onUpdate: 'CASCADE'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        schema: "escola",
      }
    );
  },

  async down(queryInterface) {
    return await queryInterface.dropTable("fotos", { schema: "escola" });
  },
};
