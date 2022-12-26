const category = require("../models/category")

exports.postAddCategory = (req, res, next) => {
    const name = req.body.name;
     category.create({name})
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



exports.getCategory = (req, res, next) => {
    category.findAll()
      .then(category => {
        res.status(200).json({category, success:true})
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };