"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable(
      "alunos",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: true,
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
    return await queryInterface.dropTable("alunos", { schema: "escola" });
  },
};
