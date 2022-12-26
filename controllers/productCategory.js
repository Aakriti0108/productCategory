const productCategory = require("../models/productCategory")
const product = require("../models/products")
const category = require("../models/category")

exports.postAddProductCategory = (req, res, next) => {
    const productId = req.body.productId;
    const categoryId = req.body.categoryId
     productCategory.create({productId,categoryId})
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



exports.getProductCategory = (req, res, next) => {
    productCategory.findAll()
      .then(products => {
        res.status(200).json({products, success:true})
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };