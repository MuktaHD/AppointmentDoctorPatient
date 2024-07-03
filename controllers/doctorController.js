// const mongoose=require('mongoose')
// const Doctor=require('../models/doctorModel')


// async function addDoctor(req,res){
//    try{
//     const newDoctor=new Doctor(req.body)
//     result= await newDoctor.save()
//     res.status(200).send(result)
//    } catch(error){
//     res.status(500).send(error)
//    }

// }


// async  function loginDoctor(req,res){
//     // console.log("loginDoctor");
//     // Doctor.find(function(err,doctors){
//     //     if(err){
//     //         console.log(err);
//     //     }
//     //     else{
//     //         res.render('doctor',{doctors:doctors});
//     //     }
//     // });
//     // res.redirect('/doctor');


//     console.log(req.body);
//     try{
//         const doctorData=req.body;

//         const doctor=await Doctor.findOne({doctorEmail:doctorData.doctorEmail});

//         if(!doctor){
//             res.status(200).send({message:"user does not exist",success:false});
//         }
//         const isMatch= await Doctor.findOne({doctorPassword:doctorData.doctorPassword});
//         if(!isMatch){
//             result={message:"password Incorrect",success:false}
//             res.status(200).send(result);
//         }
//         else{
//             result={message:"login successful",success:true,id:doctor_id}
//             res.status(404).send("Doctor not found")
//         }
//     }catch(error)
//     {
//         res.status(500).send(error)
//     }
// }








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
