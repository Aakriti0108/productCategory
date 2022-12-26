const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const productCategory = sequelize.define('productCategories',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
})

module.exports = productCategory