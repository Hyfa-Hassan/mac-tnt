const express = require('express');
const router = express.Router();
const cors = require('cors');
const getDestinations = require("../controller/destinationsController")



router.get("/", cors(), getDestinations);



module.exports = router