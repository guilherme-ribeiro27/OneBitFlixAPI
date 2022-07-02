'use strict';

const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users',[
      {
        first_name: 'Guilherme',
        last_name: 'Ribeiro',
        phone: '54315262',
        birth: '1992-07-02',
        email: 'guilherme.ribeiro062002@gmail.com',
        password: await bcrypt.hash('123456', 10),
        role:'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
