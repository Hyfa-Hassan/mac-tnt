// const mongoose = require("mongoose")
// const packSchema = mongoose.Schema({

//     first_name: {
//         type: String
//     },
//     last_name: {
//         type: String
//     },
//     email_id: {
//         type: String
//     },
//     contact_number: {
//         type: String
//     },
//     tour_date: {
//         type: String
//     },
//     no_of_days: {
//         type: String
//     },
//     adults: {
//         type: String
//     },
//     children: {
//         type: String
//     },
//     tour_package: {
//         type: String
//     }
// })

// // const Product = mongoose.model("Product", productSchema)

// // module.exports = Product

// module.exports = mongoose.model('packenquiries', packSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
  tour_date: {
    type: String,
    required: true,
  },
  no_of_days: {
    type: String,
    required: true,
  },
  adults: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  tour_package: {
    type: String,
    required: true,
  },
});
const Package = new mongoose.model("packenquiries", packSchema);
module.exports = Package;
