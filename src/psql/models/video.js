'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    static associate(models) {
      video.belongsToMany(models.tag, {
        through: 'video_tag',
      });
    }
  }

  video.init({
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
    modelName: 'video',
    tableName: 'video',
    freezeTableName: true,
  });
  return video;
};
