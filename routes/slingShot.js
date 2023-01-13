const express = require('express')
const router = express()
const dishoutControllers = require('../controllers/dishout')

router.post("/dishOut_processOrder",dishoutControllers.processOrder)

module.exports=router