const bcrypt = require('bcryptjs')
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'test@test.com',name:'Test',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'Caleb@test.com',name:'Caleb',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'Josh@test.com',name:'Josh',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'Alana@test.com',name:'Alana',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'Olivia@test.com',name:'Olivia',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
