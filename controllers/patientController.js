
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Patient = require('../models/patientModel'); 

// Function to add a new patient
async function addPatient(req, res) {
    console.log(req.body);

    const data = new Patient({
        patientName:req.body.patientName,
        patientPhonenumber:req.body.patientPhonenumber,
        patientGender:req.body.patientGender,
        patientDOB:req.body.patientDOB,
        patientBloodGroup:req.body.patientBloodGroup,
        patientEmail:req.body.patientEmail,
        patientPassword:req.body.patientPassword,
        // patientPassword: hashedPassword,
        patientAddress:req.body.patientAddress
    });
    try {
       
        const dataToSave=await data.save();
        console.log("addPatient");
        res.status(200).json(dataToSave);

    } catch (err) {

        res.status(500).json(err);
}
}
// Function to get all patients
async function getPatient(req, res) {
    try {
        console.log("getPatient");

        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({message:error.message})
    }
}

// Function to get a patient by ID

async function getPatientById(req, res) {
    try {
        console.log("getPatientById");

        const patientId = req.params.id;

        // Check if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({ message: "Invalid patient ID format" });
        }

        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        res.status(200).json(patient); // Return patient data in JSON format
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving patient", error: err.message });
    }
}


// Function for patient login

async function loginPatient(req, res) {
    try {
        console.log("loginPatient");

        const { patientEmail, patientPassword } = req.body;

        // Find patient by email
        const patient = await Patient.findOne({ patientEmail });
        if (!patient) {
            return res.status(400).json({ message: "Cannot find patient" });
        }

        // Compare passwords
        // const isPasswordValid = await bcrypt.compare(patientPassword, patient.patientPassword);
        // if (!isPasswordValid) {
        //     return res.status(400).json({ message: "Invalid password" });
        // }

        if (patient.patientPassword !== patientPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }


        // Successful login
        console.log("Login successful");
        res.status(200).json({ message: "Login successful", patient });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error during login", error: err.message });
    }
}




module.exports = {
    addPatient,
    getPatient,
    getPatientById,
    loginPatient
};


























// {
//     "patientName": "Patient1",
//     "patientPhonenumber":"9850868214",
//            "patientGender":"F",
//             "patientDOB": "1993-8-7",
//             "patientBloodGroup":"AB-",
//             "patientEmail":"patient1@gmail.com",
//             "patientPassword":"patient1",
//             "patientAddress":"Pune"
// }
