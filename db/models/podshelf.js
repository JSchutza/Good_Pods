'use strict';
module.exports = (sequelize, DataTypes) => {
  const PodShelf = sequelize.define('PodShelf', {
    shelfId: DataTypes.INTEGER,
    podcastId: DataTypes.INTEGER
  }, {});
  PodShelf.associate = function(models) {
    // PodShelf.hasMany(models.Shelf, {foreignKey: "shelfId"})
    // PodShelf.hasMany(models.Podcast, {foreignKey: "podcastId"})

  };
  return PodShelf;
};
