const express = require('express')
const router = express.Router()
const cors = require('cors');
const Package = require("../model/PackEnquiry")

router.post("/enquiry/test",async(req,res)=>{
    // console.log(req.body)
    const {first_name, last_name, email_id, contact_number, tour_date, no_of_days, adults, children, tour_package}=req.body;
    if(!first_name || !last_name || !email_id || !contact_number || !tour_date || !no_of_days || !adults || !children || !tour_package){
        res.status(404).send("Fill the data")
    }
    try{
        const addData = new Package({
            first_name, 
            last_name,
            email_id,
            contact_number,
            tour_date,
            no_of_days,
            adults, 
            children,
            tour_package
        })
        await addData.save();
        res.status(201).json(addData);
        // console.log(addData);
    }catch(error){
        res.status(404).json(error)
    }
})
module.exports = router