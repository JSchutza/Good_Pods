'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelves', [
      {
      type: 'Current',
      userId: 1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      type: 'Thumbs Up',
      userId: 1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      type: 'On My Radar',
      userId: 1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      type: 'Meh',
      userId: 1,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      type: 'Thumbs Down',
      userId: 1,
      createdAt:new Date(),
      updatedAt:new Date(),
    }
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelves', null, {});

  }
};
