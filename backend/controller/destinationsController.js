const Destinations = require("../model/DestinationsModel")


const getDestinations = async (req, res) => {
   // res.send("Destination API Response")
    try {
        const Destination = await Destinations.find({})
        res.json({Destination})
        // console.log(Destination)
    } catch(error) {
        next(error)
    }
}




module.exports = getDestinations;