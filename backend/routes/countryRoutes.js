const express = require('express')
const router = express.Router()
const getPackCountry =require("../controller/countryController")
//const getCountry = require("../controller/countryController")
const cors = require('cors');


router.get("/", cors(), getPackCountry)
 router.get("/:country", cors(), getPackCountry)


module.exports = router