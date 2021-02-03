'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    podShelfId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Podcast, {foreignKey: "podcastId"})
    Review.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Review;
};