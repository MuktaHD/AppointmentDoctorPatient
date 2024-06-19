

const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
 const apiRouter=require('./router/api');
 


const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', apiRouter);

//these database are mongodb compass connection
// mongoose.connect('mongodb://localhost:27017/mydb')

//these database are mongodb atlas connection

mongoose.connect('mongodb+srv://muktabhosale3:surekha9764@cluster0.svann.mongodb.net/appointmentManagement')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Connected to db');
});

app.listen(5001, () => {
    console.log('Server is running on port http://127.0.0.1:5001');
});

// http://127.0.0.1:5001/api/addPatient