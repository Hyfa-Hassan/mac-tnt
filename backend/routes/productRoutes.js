const express = require('express')
const router = express.Router()
const {getProducts, getIntProducts} =require("../controller/productController")
const cors = require('cors');


router.get("/", cors(), getProducts);
router.get("/product", cors(), getProducts);
router.get("/international", cors(), getIntProducts);

module.exports = router