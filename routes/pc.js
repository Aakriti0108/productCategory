const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product")
const categoryControllers = require("../controllers/category")
const productCategoryControllers = require("../controllers/productCategory")

router.post("/create-products",productControllers.postAddProduct)
router.get("/get-products",productControllers.getProducts)
router.post("/create-category",categoryControllers.postAddCategory)
router.get("/get-category",categoryControllers.getCategory)
router.post("/create-product-category",productCategoryControllers.postAddProductCategory)
router.get("/get-products-category",productCategoryControllers.getProductCategory)

module.exports= router