'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PodShelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shelfId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {model: "Shelves"}
      },
      podcastId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {model: "Podcasts"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PodShelves');
  }
};