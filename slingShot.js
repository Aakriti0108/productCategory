const express = require('express')
const slingShot = express();

const cors = require('cors')
const bodyParser = require('body-parser');
slingShot.use(cors());

slingShot.use(bodyParser.json())

const dishroutes = require('./routes/slingShot')
const sequelize = require('./util/database')

slingShot.use(dishroutes)

sequelize
.sync()
//.sync({force:true})
.then(result=>{
    slingShot.listen(3000)
})
.catch(err=>{
    console.log(err)
})