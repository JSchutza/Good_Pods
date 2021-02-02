'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    genreId: DataTypes.INTEGER
  }, {});
  Podcast.associate = function(models) {
    // associations can be defined here
  };
  return Podcast;
};