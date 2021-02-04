'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      podcastId: 1,
      rating:1,
      reviewText:"Test review123123!@#!@#",
      createdAt:'2021-2-4',
      updatedAt:'2021-2-4',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
