'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    genreId: DataTypes.INTEGER
  }, {});
  Podcast.associate = function(models) {
    Podcast.belongsTo(models.Genre, {foreignKey: "genreId"})
    const columnMapping = {
      through: "PodShelf",
      foreignKey: "podcastId",
      otherKey: "shelfId"
    }
    Podcast.belongsToMany(models.Shelf, columnMapping)
  };
  return Podcast;
};