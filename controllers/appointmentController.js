//add the appointment model

const Appointment = require('../models/appointment');

// Function to add an appointment
async function addAppointment(req, res) {
    console.log("req.body appointmentController", req.body);

    const newAppointment = new Appointment(req.body);//give the whole body

    try {
        const result = await newAppointment.save();
        res.status(200).send({ message: "Appointment successfully created", result });
    } catch (err) {
        res.status(500).send({ message: "Error creating appointment", error: err });
    }
}
// http://127.0.0.1:5001/api/appointments

// {
//     "patientId": "666aa0c3079a126e2a6825b7",//This is patientid
//     "doctorId": "666ad77d66d4f874dde3c9ee",//this is doctorid
//     "appointmentDateTime": "2024-06-20T15:30:00Z",
//     "status": "Accepted"
// }


// Function to get an appointment by ID
async function getAppointmentById(req, res) {
    console.log("req.params appointmentController", req.params);

    const appointmentId = req.params.id;

    try {
        const result = await Appointment.findById(appointmentId);
        if (!result) {
            return res.status(404).send({ message: "Appointment not found" });
        }
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving appointment", error: err });
    }
}

// http://127.0.0.1:5001/api/appointments/6671382f4ba847c478ad728e


// Function to delete an appointment by ID
async function deleteAppointment(req, res) {
    const appointmentId = req.params.id;

    try {
        const result = await Appointment.findByIdAndDelete(appointmentId);
        if (!result) {
            return res.status(404).send({ message: "Appointment not found" });
        }
        res.status(200).send({ message: "Appointment successfully deleted" });
    } catch (err) {
        res.status(500).send({ message: "Error deleting appointment", error: err });
    }
}
// http://127.0.0.1:5001/api/deleteAppointment/66713790c48091d6538e1600

// Function to get appointments by patient ID

async function getAppointmentByPatientId(req, res) {
    const patientId = req.params.patientId;

    try {
        const results = await Appointment.find({ patientId: patientId });
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving appointments", error: err });
    }
}
// http://127.0.0.1:5001/api/getAppointmentByPatientId/666aa020079a126e2a6825b5

// Function to get all appointments
async function getAllAppointments(req, res) {
    try {
        const results = await Appointment.find({});
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving appointments", error: err });
    }
}

// http://127.0.0.1:5001/api/getAllAppointments

// Function to get appointments by doctor ID
async function getAppointmentByDoctorId(req, res) {
    const doctorId = req.query.doctorId;

    try {
        const results = await Appointment.find({ doctorId: doctorId }, { doctorId: 1, patientId: 1 });
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving appointments", error: err });
    }
}
// http://127.0.0.1:5001/api/getAppointmentByDoctorId?doctorId=666ad6db66d4f874dde3c9ec


// Function to update an appointment by doctor
async function updateAppointmentByDoctor(req, res) {
    const appointmentId = req.params.id;
    const updateData = req.body;

    try {
        const validStatuses = ['Pending', 'Accepted', 'Rejected'];

      
        if (updateData.status && !validStatuses.includes(updateData.status)) {
            return res.status(400).send({ message: "Invalid status" });
        }


        const result = await Appointment.findByIdAndUpdate(appointmentId, updateData, { new: true });
        if (!result) {
            return res.status(404).send({ message: "Appointment not found" });
        }

        res.status(200).send({ message: "Appointment successfully updated", result });
    } catch (err) {
        res.status(500).send({ message: "Error updating appointment", error: err });
    }
}


    // http://127.0.0.1:5001/api/updateAppointmentByDoctor/66713790c48091d6538e1600  This is appointId
    // {
    //     "status": "Rejected",
    //     "appointmentDateTime": "2024-06-21T15:30:00Z"
    // }


module.exports = {
    addAppointment,
    getAppointmentById,
    deleteAppointment,
    getAppointmentByPatientId,
    getAllAppointments,
    getAppointmentByDoctorId,
    updateAppointmentByDoctor
   
};
