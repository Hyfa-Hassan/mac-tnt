const express = require('express')
const router = express.Router()
const cors = require('cors');
const BookHomeFlight = require("../model/HomeForm")

router.post("/homeform",async(req,res)=>{
    const {tou, whenn, traveltype, guest, contact}=req.body;
    // console.log(req.body)
    // console.log(req.body)
    // if(!fromm || !tou || !whenn || !traveltype || !guest || !contact){
    //     res.status(400).send("Fill the data")
    // }
    try{
        const homeData = new BookHomeFlight({
            tou,
            whenn,
            traveltype,
            guest,
            contact,
        })
        // console.log("data is saved",addData)
        await homeData.save();
        res.status(201).json(homeData);
        // console.log("mongodb data saved",homeData);
    }catch(error){
        // console.log("error here is",error)
        res.status(404).json(error)
    }
})
module.exports = router