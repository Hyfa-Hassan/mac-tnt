const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    date:{ type: String},
    
    no_of_people: {
        type: String
    },
    title: {
        type: String
    },
    short_description: {
        type: String
    },
    star_rating: {
        type: String
    },

    no_of_reviews: {
        type: String
    },
    type: {
        type: String
    },
    image: {
        type: String
    },
    days: {
        type: String
    },
    country: {
        type: String
    },
})

// const Product = mongoose.model("Product", productSchema)

// module.exports = Product

module.exports = mongoose.model('Packages', productSchema);