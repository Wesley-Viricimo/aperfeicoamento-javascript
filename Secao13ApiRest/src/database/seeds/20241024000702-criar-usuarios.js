'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    return queryInterface.bulkInsert(
      { tableName: 'users', schema: 'escola' },
      [
        {
          nome: 'Jessica Jullie',
          email: 'jessica.jullie@gmail.com',
          password_hash: await bcrypt.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Ana Julia',
          email: 'ana.juliae@gmail.com',
          password_hash: await bcrypt.hash('12345', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete(
      { tableName: 'users', schema: 'escola' },
      null,
      {}
    );
  }
};
