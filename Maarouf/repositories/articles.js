const { Article } = require('../models')
const models = require('../models')
module.exports = {

    getAllArticles() {
        return Article.findAll()
    },
    getArticles(limit = 10) {
        return Article.findAndCountAll({
            limit: limit,
            where: {},
        })
    },
    getArticle(id) {
        return Article.findOne({
            where: {
                id: id
            }
        })
    },
    addArticle(article) {
        return Article.create(article)
    },
    updateArticle(article) {
        return Article.update(
            article,
            {
                where: {
                    id: article.id
                }
            }
        )
    },
    deleteArticle(id) {
        return Article.destroy({
            where: {
                id: id
            }
        })
    },
    getArticleWithComments(id) {
        return Article.findOne({
            where: {
                id
            },
            include: models.Comment

        })
    }

}