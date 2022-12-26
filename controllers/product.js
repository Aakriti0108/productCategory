const product = require("../models/products")


exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
     product.create({name})
      .then(result => {
         console.log(result);
        console.log('Created Product');
        res.status(201).json({result:result})
      })
      .catch(err => {
        res.status(500).json(err)
        console.log(err);
      });
  };



exports.getProducts = (req, res, next) => {
    product.findAll()
      .then(products => {
        res.status(200).json({products, success:true})
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };


  

  