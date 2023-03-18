const Product = require("../model/ProductModel")


const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({}).sort({name: 1})
        res.json({products})
    } catch(error) {
        next(error)
    }
}


const getIntProducts = async (req, res, next) => {
    try {
        const intpack = await Product.find({'type':'international'})
        console.log(intpack);
        res.json({intpack})
    } catch(error) {
        next(error)
    }
}


module.exports = {getProducts, getIntProducts};