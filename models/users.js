const { DataTypes } = require('sequelize')
const sequelize = require('../db/db')

const User = sequelize.define('User', {
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.sync({alter:true})

module.exports = User