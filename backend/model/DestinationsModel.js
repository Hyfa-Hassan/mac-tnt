const mongoose = require("mongoose")
const destSchema = mongoose.Schema({
    country: {
        type: String
    },
    star_rating: {
        type: String
    },
    no_of_reviews: {
        type: String
    },
    short_desc: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    about_image: {
        type: Array
    },
    banner_image: {
        type: String
    },
})

// const Product = mongoose.model("Product", productSchema)

// module.exports = Product

module.exports = mongoose.model('Destinations', destSchema);