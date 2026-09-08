const mongoose = require("mongoose");

const Doctor = require("./modelss/Doctor.js");


mongoose
    .connect(
        "mongodb://127.0.0.1:27017/smart_healthcare"
    )
    .then(async () => {

        console.log("MongoDB connected!");

        await Doctor.deleteMany({});

        console.log(
            "Old doctors deleted!"
        );

    const doctors = [

    {
        name: "Dr. Anil Kumar",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Rahul Sharma",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Priya Rao",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "12 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Kiran Kumar",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "7 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Sneha Reddy",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
{
        name: "Dr. Anil Kumar",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "12 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Priya Sharma",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Arjun Rao",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "11 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Meera Nair",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Vikram Singh",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Neha Kapoor",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Rohan Mehta",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "7 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Asha Rao",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "12 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Sanjay Kumar",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Divya Menon",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Ajay Verma",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "11 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Kavya Reddy",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Suresh Rao",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "13 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Nithin Kumar",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "7 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Ananya Singh",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Pooja Sharma",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Vivek Rao",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "11 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Riya Menon",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Akash Verma",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "7 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Shreya Nair",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Naveen Kumar",
        specialization: "ENT",
        department: "ENT",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Swathi Rao",
        specialization: "ENT",
        department: "ENT",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Harish Sharma",
        specialization: "ENT",
        department: "ENT",
        experience: "12 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Deepa Nair",
        specialization: "ENT",
        department: "ENT",
        experience: "7 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Rohit Verma",
        specialization: "ENT",
        department: "ENT",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Lakshmi Rao",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "12 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:00 AM - 01:00 PM"
    },

    {
        name: "Dr. Megha Sharma",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "9 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "10:00 AM - 02:00 PM"
    },

    {
        name: "Dr. Anjali Nair",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "11 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "11:00 AM - 03:00 PM"
    },

    {
        name: "Dr. Kavitha Kumar",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "8 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "09:30 AM - 01:30 PM"
    },

    {
        name: "Dr. Shalini Verma",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "10 years",
        availableDays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        availableTime: "02:00 PM - 06:00 PM"
    }
];
    await Doctor.insertMany(doctors);

    console.log(
        "35 Doctors added successfully!"
    );

    await mongoose.connection.close();

    console.log(
        "MongoDB connection closed."
    );
})
.catch((error) => {

    console.log(
        "MongoDB Error:",
        error
    );

});