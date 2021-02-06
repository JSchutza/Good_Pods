'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PodShelves', [
      {shelfId: 1,podcastId: 1,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 4,podcastId: 2,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 5,podcastId: 3,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 2,podcastId: 4,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 4,podcastId: 5,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 2,podcastId: 5,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 3,podcastId: 6,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 1,podcastId: 7,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 2,podcastId: 8,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 3,podcastId: 9,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 4,podcastId: 10,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 5,podcastId: 11,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
      {shelfId: 2,podcastId: 12,createdAt: '2021-04-02',updatedAt: '2021-04-02'},
        ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PodShelves', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
