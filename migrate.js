const db = require('../MAAROUF/Maarouf/models')
async function migrate() {
    await db.sequelize.sync({ force: true })
}
migrate()
