const Sequelize = require('sequelize')
const sequelize = new Sequelize('productCategory','root','Neeraj@9911',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;