const express=require ('express');
const TempDocReg = require('../../Models/doctor/doctorRegistration');

const router=express.Router();


router.get("/pendingDoctorRequests",async(req,res)=>{

    try{
        const requests=await TempDocReg.find({status:'pending'});

        res.status(200).json({
         message:requests
    })
    }
    catch(err){
        res.status(400).json({
        message:"error in finding the pending requests",
        err    
    })
    }
   

});



module.exports=router;