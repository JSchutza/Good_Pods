'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { name: 'Comedy', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Educational', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'News And Politics', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'True Crime', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Tech', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Sports', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Stories', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Music', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Video Games', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
      { name: 'Fiction', createdAt: '2021-01-26', updatedAt: '2021-01-26' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {})
  }
};
