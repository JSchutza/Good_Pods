'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelves', [
    {name: 'Current',userId: 1,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Up',userId: 1,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'On My Radar',userId: 1,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Meh',userId: 1,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Down',userId: 1,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Current',userId: 2,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Up',userId: 2,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'On My Radar',userId: 2,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Meh',userId: 2,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Down',userId: 2,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Current',userId: 3,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Up',userId: 3,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'On My Radar',userId: 3,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Meh',userId: 3,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Down',userId: 3,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Current',userId: 4,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Up',userId: 4,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'On My Radar',userId: 4,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Meh',userId: 4,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Down',userId: 4,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Current',userId: 5,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Up',userId: 5,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'On My Radar',userId: 5,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Meh',userId: 5,createdAt:new Date(),updatedAt:new Date(),},
    {name: 'Thumbs Down',userId: 5,createdAt:new Date(),updatedAt:new Date(),},
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelves', null, {});

  }
};