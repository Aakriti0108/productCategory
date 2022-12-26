const express = require('express')
const pc = express();

const cors = require('cors');
const bodyParser = require('body-parser');
pc.use(cors())

pc.use(bodyParser.json())
const productRoutes = require('./routes/pc')
const sequelize = require("./util/database")
const product = require('./models/products')
const category = require('./models/category')
const productCategory = require("./models/productCategory");

pc.use(productRoutes)

product.hasMany(productCategory)
category.hasMany(productCategory)

productCategory.belongsTo(product)
productCategory.belongsTo(category)

sequelize
//.sync({force:true})
.sync()
.then(result=>{
    pc.listen(3000)
})
.catch(err=>{
    console.log(err)
})