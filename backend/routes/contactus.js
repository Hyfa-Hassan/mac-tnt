const express = require('express')
const router = express.Router()
const cors = require('cors');
const ContactUs = require("../model/ContactModel");

router.post("/contactus",async(req,res)=>{
    const {name, email, phone, subject, message}=req.body;
    // console.log(req.body)
    // console.log(req.body)
    // if(!fromm || !tou || !whenn || !traveltype || !guest || !contact){
    //     res.status(400).send("Fill the data")
    // }
    try{
        const contactData = new ContactUs({
            name, 
            email,
            phone,
            subject,
            message,
        })
        // console.log("data is saved",addData)
        await contactData.save();
        res.status(201).json(contactData);
        console.log("mongodb data saved",contactData);
    }catch(error){
        console.log("error here is",error)
        res.status(404).json(error)
    }
})
module.exports = router