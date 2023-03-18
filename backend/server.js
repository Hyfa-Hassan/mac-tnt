const express = require('express')
const cors = require('cors');
const Package = require("./model/PackEnquiry")
const apiRoutes = require("./routes/apiRoutes")
const connectDB = require("./config/db")
const enqRouter = require("./routes/enquiry")
const flightBookingRouter = require("./routes/flights")
const contactusRouter = require("./routes/contactus")
const homePageFlight = require("./routes/homeFormRoute")
const app = express()
connectDB();

const port = 3004
app.use(cors());
app.use(express.json())
app.use('/api', apiRoutes)
app.use(enqRouter)
app.use(flightBookingRouter)
app.use(contactusRouter)
app.use(homePageFlight);
app.use((error, req, res, next) => {
    console.error(error);
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
		