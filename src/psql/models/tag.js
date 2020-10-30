'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      // define association here
    }
  }

  tag.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'tag',
    tableName: 'tag',
    freezeTableName: true,
  });
  return tag;
};
