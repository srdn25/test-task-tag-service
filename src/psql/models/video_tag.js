'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_tag extends Model {
    static associate(models) {
      // define association here
    }
  }

  video_tag.init({
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'video_tag',
    tableName: 'video_tag',
    freezeTableName: true,
  });
  return video_tag;
};
