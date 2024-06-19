const express=require('express');
const router=express.Router();

const patientController=require('../controllers/patientController');
const doctorController=require('../controllers/doctorController');
const appointmentController=require('../controllers/appointmentController');

router.get('/',(req,res)=>{
    res.send("Hello World");
});


//Patient routers
router.post('/addPatient',patientController.addPatient);
router.get('/getPatient',patientController.getPatient);
router.get('/getPatientById/:id',patientController.getPatientById);
router.post('/login',patientController.loginPatient);


//Doctor Routers
router.post('/addDoctor',doctorController.addDoctor);
router.get('/getAllDoctors',doctorController.getAllDoctors);
router.get('/getDoctorById/:id',doctorController.getDoctorById);
router.post('/loginDoctor',doctorController.loginDoctor);


//Appointment routers

// router.post('/addAppointment',appointmentController.addAppointment);
// router.get('/getAppointmentById',appointmentController.getAppointmentById);
// router.get('/ getAllAppointments,',appointmentController. getAllAppointments);
// router.delete('/deleteAppointment',appointmentController.deleteAppointment);
// router.get('/getAppointmentPatientId/:id',appointmentController.getAppointmentByPatientId);
// router.get('/getAppointmentByDoctorId',appointmentController.getAppointmentByDoctorId);

// router.put('/updateAppointmentByDoctor',appointmentController.updateAppointmentByDoctor);

// router.post('/loginAppointment',appointmentController.loginAppointment);



router.post('/appointments', appointmentController.addAppointment);
router.delete('/deleteAppointment/:id', appointmentController.deleteAppointment);

router.get('/appointments/:id', appointmentController.getAppointmentById);
router.get('/getAppointmentByPatientId/:patientId', appointmentController.getAppointmentByPatientId);// For patientId query
router.get('/getAllAppointments', appointmentController.getAllAppointments);
router.get('/getAppointmentByDoctorId', appointmentController.getAppointmentByDoctorId); //For doctorId query

router.put('/updateAppointmentByDoctor/:id', appointmentController.updateAppointmentByDoctor);



module.exports=router;

