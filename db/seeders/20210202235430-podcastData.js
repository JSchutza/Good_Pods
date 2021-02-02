'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Podcasts', [

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Podcasts', null, {})
  }
};
