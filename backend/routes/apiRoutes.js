const express = require("express")
const app = express()
const productRoutes = require("./productRoutes")
const destinationRoutes = require("./destinationsRoutes")
const countryRoutes = require("./countryRoutes")
// const enquiryRoutes = require("./enquiry")

app.use("/products", productRoutes);
//app.use("/international", productRoutes);
app.use("/destinations", destinationRoutes);
app.use("/country", countryRoutes);
// app.use("/enquiry", enquiryRoutes);


module.exports = app