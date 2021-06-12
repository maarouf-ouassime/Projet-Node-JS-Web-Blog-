'use strict';
const { unique } = require('faker');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {

    static associate(models) {
      //article et User relation de (1,n)
      Article.belongsTo(models.User, { foreignKey: 'userId' })
      //article et coment relation de (n,1)
      Article.hasMany(models.Comment, { foreignKey: 'articleId' })
      //article et User relation de (n,n)
      Article.belongsToMany(models.Tag, { through: 'ArticleTags' })
    }
  };
  Article.init({
    title: {
      type: DataTypes.STRING,
      unique: true
    }
    ,
    content: DataTypes.TEXT,
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};