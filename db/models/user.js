'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
  },
    name: {
      type: DataTypes.STRING(70),
      allowNull: false
  },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
  },
  avatar: {
    type: DataTypes.STRING(100)
  }
}, {});

  User.associate = function (models) {
    User.hasMany(models.Shelf, {foreignKey: "userId"})
    User.hasMany(models.Review, {foreignKey: "userId"})
  };

  return User;
}; 