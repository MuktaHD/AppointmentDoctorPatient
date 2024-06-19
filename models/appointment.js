


const mongoose=require("mongoose");

const appointmentSchema=mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,ref:"patient",
        require:true},
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,ref:"Doctor",
        require:true},
    appointmentDateTime:{
        type:Date,
        required:true},
    status:{
        type:String, 
        enum:["Pending","Accepted","Rejected"],default:"Pending"}
   
});

module.exports=mongoose.model("appointment",appointmentSchema);


// {
//     "patientId": "666aa020079a126e2a6825b5",
//     "doctorId": "666ad6db66d4f874dde3c9ec",
//     "appointmentDateTime": "2024-06-18T14:30:00Z",
//     "status": "Pending"
// }
