'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    Shelf.belongsTo(models.User, {foreignKey: "userId"})
    const columnMapping = {
      through: "PodShelf",
      otherKey: "podcastId",
      foreignKey: "shelfId"
    }
    Shelf.belongsToMany(models.Podcast, columnMapping )
  };
  return Shelf;
};