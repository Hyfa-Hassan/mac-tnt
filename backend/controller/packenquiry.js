// const Package = require("../model/PackEnquiry")


// const insertenquiry = async(req,res) => {
//     const enquiry = req.body;
//     console.log(enquiry)
//     const newEnquiry = new Package(enquiry);
//     try{
//         await newEnquiry.save();
//         res.status(201).json(newEnquiry);
//     }catch(error){
//         res.status(404).json({message:error.message})
//     }
// }

// const insertenquiry = async (req, res, next) => {

//     try {
         
//          const enquiry = req.body;
//          console.log(enquiry);
//         //const countryparams = req.params.country.toUpperCase();
//         //console.log(countryparams)
//         console.log("He......");
//          const enqdata = await Package.create({enquiry});
//          res.json({enqdata})
//     } catch(error) {
//         next(error)
//     }

// }

// module.exports = insertenquiry;