const mongoose = require("mongoose");

const doctorRegistration = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 255,
    required: true,
  },
  email: {
    type: String,
    min: 3,
    max: 255,
    required: true,
  },
  mobile: { type: Number },
  username: { type: String },
  password: { type: String },
  gender: { type: String },
  speciality: { type: String },
  state: { type: String },
  city: { type: String },
  address: {
    type: String,
  },
  status: {
    type: String,
  },

  // for backend use only
  date: {
    type: Date,
    default: Date.now,
  },
});

const TempDocReg = mongoose.model("TempDocReg", doctorRegistration);
module.exports = TempDocReg;
