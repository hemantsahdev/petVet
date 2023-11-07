const express = require("express");
const TempDocReg = require("../../Models/doctor/doctorRegistration");
const DOCTORS = require("../../Models/doctor/permanentDoctors");
const router = express.Router();
const bcrypt = require("bcryptjs");


// to post the form details on registration
router.post("/doctor-registration", async (req, res) => {
  const {
    name,
    email,
    mobile,
    username,
    password,
    gender,
    speciality,
    state,
    city,
    address,
  } = req.body;

  // checking if user already exists
  const usernameExist = await TempDocReg.findOne({
    username,
    status: "pending",
  });
  if (usernameExist)
    return res.status(400).json({ message: "Username already Exists" });

  // hashing password
  const hashedPassword = await bcrypt.hash(password, 10);

  const tempDoctor = await TempDocReg({
    name,
    email,
    mobile,
    username,
    password: hashedPassword,
    gender,
    speciality,
    state,
    city,
    address,
    status: "pending",
  });

  try {
    const temp = await tempDoctor.save();

    res.status(200).json({
      message: "Request sent to admin for approval",
      temp,
    });
  } catch (error) {
    res.status(400).json({
      message: "Doctor Request not able to send! ",
      error,
    });
  }
});

// to get all the registered doctors to ADMIN
router.get("/doctor-registration", async (req, res) => {
  try {
    const tempDoctors = await TempDocReg.find();

    res.status(200).json({
      tempDoctors,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
});

// on approval from the admin 
router.post("/permanent-doctor", async (req, res) => {
  const {
    name,
    email,
    mobile,
    username,
    password,
    gender,
    speciality,
    state,
    city,
    address,
  } = req.body;

  const doctor = await DOCTORS({
    name,
    email,
    mobile,
    username,
    password,
    gender,
    speciality,
    state,
    city,
    address,
  });

  try {
    const savedDoctor = await doctor.save();

    res.status(200).json({
      message: "Doctor Approved",
      savedDoctor,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err,
    });
  }
});

// based on the decision of the admin
router.put("/changingStatus", async (req, res) => {
  const { id, status } = req.body;

  try {
    const temp = await TempDocReg.findByIdAndUpdate(
      { _id: id },
      { $set: { status } }
    );
    res.status(200).json({
      message: "Status changed Successfully",
      temp,
    });
  } catch (err) {
    res.status(400).json({
      message: "Status updation Unsuccessfull",
      err,
    });
  }
});

// doctor can open his dashboard
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // checking if username exist in the db

    const user = await TempDocReg.findOne({ username });

    if (!user) return res.status(400).json({ message: "Username Invalid" });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return res.status(400).json({ message: "Invalid Password" });

    // finally
    res.status(200).json({
      message: "Logged In Successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Problem in logging in" });
  }
});

// list of available doctors to the CLIENTS
router.get("/permanent-doctor", async (req, res) => {
  try {
    const doctors = await DOCTORS.find();

    res.status(200).json({
      doctors,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
});

module.exports = router;
