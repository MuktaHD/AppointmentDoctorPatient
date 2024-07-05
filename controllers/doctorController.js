
// // {
// //     "doctorEmail":"doctor1@gmail.com",
// //     "doctorPassword":"doctor1"
// // }


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Doctor = require('../models/doctorModel');

// Add a new doctor
async function addDoctor(req, res) {
    console.log(req.body);

const data=new Doctor({
    doctorName:req.body.doctorName,
    doctorPhonenumber:req.body.doctorPhonenumber,
    doctorSpecialist:req.body.doctorSpecialist,
    doctorEmail:req.body.doctorEmail,
    doctorPassword:req.body.doctorPassword,
    doctorAddress:req.body.doctorAddress,
});

   
    try {
        const doctorData=await data.save();
        console.log("addDoctor");
    res.status(200).json(doctorData);
       
    } catch (error) {
        res.status(500).send(error);
    }
}


// Get all doctors
async function getAllDoctors(req, res) {
    try {
        console.log("getAllDoctors");
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
}

//Function to get a doctor ny ID

async function getDoctorById(req, res) {
    try {
        console.log("getDoctorById");
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Login a doctor
async function loginDoctor(req, res) {
    console.log(req.body);
    try {
       console.log("loginDoctor");
       const { doctorEmail,doctorPassword}=req.body;
        // Find doctor by email
        const doctor = await Doctor.findOne({ doctorEmail });
        if (!doctor) {
            return res.status(400).json({ message: "Cannot find doctor" });
        }

        // Compare passwords
        if(doctor.doctorPassword !== doctorPassword){
            return res.status(400).json({ message: "Invalid password" });
        }
        // Successful login
        console.log("Login successful");
        res.status(200).json({ message: "Login successful", doctor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error during login", error: err.message });
    }
}


module.exports = {
    addDoctor,
    getAllDoctors,
    getDoctorById,
    loginDoctor
};
