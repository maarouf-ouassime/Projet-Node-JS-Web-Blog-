'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      //comment et Article relation de (1,n)
      Comment.belongsTo(models.Article, { foreignKey: 'articleId' })
    }
  };
  Comment.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};