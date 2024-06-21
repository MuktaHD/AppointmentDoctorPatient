# AppointmentDoctorPatient

This repository contains the backend code for an appointment management system built using Node.js, Express, and MongoDB. The system allows for managing patient and doctor data, including adding, retrieving, and logging in users.

Table of Contents
Prerequisites
Installation
Configuration
API Endpoints
Patient Endpoints
Doctor Endpoints
Running the Application
Contributing
Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm.
You have a MongoDB Atlas account or a local MongoDB instance.
Installation
1.clone repo.
https://github.com/MuktaHD/AppointmentDoctorPatient.git

2 . Install dependencies:

    npm install express
    npm install mongoose
Install nodemon:
    npm install nodemon
Configuration
Create a .env file in the root directory and add your MongoDB connection string:
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.prqkren.mongodb.net/appointmentManagement
Replace and with your MongoDB Atlas credentials.
API Endpoints
Add patient
Add Doctor
get Appointment

Running the Application
Start the server
    npm start
Contributing
Contributions are always welcome! Please feel free to submit a Pull Request.
