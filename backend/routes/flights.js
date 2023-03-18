const express = require('express')
const router = express.Router()
const cors = require('cors');
const BookFlight = require("../model/FlightBooking")

router.post("/bookings",async(req,res)=>{
    const {fromm, tou, whenn, traveltype, guest, contact}=req.body;
    // console.log(req.body)
    // console.log(req.body)
    // if(!fromm || !tou || !whenn || !traveltype || !guest || !contact){
    //     res.status(400).send("Fill the data")
    // }
    try{
        const bookData = new BookFlight({
            fromm, 
            tou,
            whenn,
            traveltype,
            guest,
            contact,
        })
        // console.log("data is saved",addData)
        await bookData.save();
        res.status(201).json(bookData);
        console.log("mongodb data saved",bookData);
    }catch(error){
        console.log("error here is",error)
        res.status(404).json(error)
    }
})
module.exports = router