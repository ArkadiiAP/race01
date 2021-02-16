const Sequelize = require('sequelize')

const sequelize = new Sequelize('race01', 'apihuzov', 'securepass',
  {
    dialect: 'mysql',
    storage: 'localhost'
  }
)

module.exports = sequelize