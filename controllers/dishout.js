const dishOut_Data = require('../models/dishout_processOrder')

exports.processOrder = (req,res)=>{
    const {amount,authNumber,autoPower,city,customerId,customerName,callBackUrl,DeviceIds,Email,forceBatch,latitude,longtiude,InvoiceNumber,itemId,itemName,itemPrice,quantity,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip} = req.body
    dishOut_Data.create({amount,authNumber,autoPower,city,customerId,customerName,callBackUrl,DeviceIds,Email,forceBatch,latitude,longtiude,InvoiceNumber,itemId,itemName,itemPrice,quantity,merchantId,module,OrderDate,OriginatorId,PNREF,processorToken,register,requestBatch,SKU,SSID,state,status,streetAddress,transactionType,zip})
    .then(result=>{
        console.log(result);
        console.log("created")
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
        console.log(err)
    })
}
