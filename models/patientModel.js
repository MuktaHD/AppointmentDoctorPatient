const mongoose=require('mongoose');

const patient=mongoose.Schema({
    patientName:{
        type:String,
        required:false
    },
    patientPhonenumber:{
        type:String,
        required:false
    },
    patientGender:{
        type:String,
        required:false
    },
    patientDOB:{
        type:Date,
        required:false
    },
    patientBloodGroup:{
        type:String,
        required:false
    },
    patientEmail:{
        type:String,
        required:false
    },
    patientPassword:{
        type:String,
        required:false
    },
    patientAddress:{
        type:String,
        required:false
    },
   
   
})

module.exports=mongoose.model('patient',patient);