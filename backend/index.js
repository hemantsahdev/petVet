const express=require("express");
const app =express();

const cors =require('cors');
app.use(cors());

app.use(express.json());


const dotenv=require("dotenv");
dotenv.config();

const mongoose=require('mongoose');
mongoose.connect(process.env.DB_CONNECT);
mongoose.connection.on('connected',()=>{
    console.log('connected to db');
})

// call to doctors PUBLIC
const doctorPublic=require('./publicRoutes/doctor/doctor');

app.use('/doctor',doctorPublic);


// call to admins PUBLIC
const pendingDoctorRequests=require('./publicRoutes/admin/adminPage');
app.use('/admin',pendingDoctorRequests)




const port =process.env.PORT;
app.listen(port,()=>{
    console.log(`Port Connected ${port}`)
})