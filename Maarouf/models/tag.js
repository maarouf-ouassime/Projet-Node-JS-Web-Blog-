'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {

    static associate(models) {
      //tag et article relation de (n,n)
      Tag.belongsToMany(models.Article, { through: 'ArticleTags' })
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};