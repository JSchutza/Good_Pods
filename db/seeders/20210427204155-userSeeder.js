const bcrypt = require('bcryptjs')
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [ 
      { email: 'test@test.com',name:'Test',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'caleb@test.com',name:'Caleb',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'josh@test.com',name:'Josh',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'alana@test.com',name:'Alana',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
      { email: 'olivia@test.com',name:'Olivia',hashedPassword:bcrypt.hashSync('password', 10),createdAt:new Date(),updatedAt:new Date()},
], {});
},
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
