const Country = require("../model/ProductModel")


const getPackCountry = async (req, res, next) => {
    try {
        //const countryparams = req.params.country.toUpperCase();
        //console.log(countryparams)
        const country = await Country.find({'country':req.params.country});
        res.json({country})
    } catch(error) {
        next(error)
    }

}



module.exports = getPackCountry;