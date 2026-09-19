const mongoose = require("mongoose");
const Doctor = require("./modelss/Doctor.js");

const MONGO_URI = "mongodb://127.0.0.1:27017/smart_healthcare";

const doctors = [

    // =========================
    // GENERAL MEDICINE
    // =========================

    {
        name: "Dr. Rahul Sharma",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Priya Rao",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "12 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Kiran Kumar",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "7 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Sneha Reddy",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    },
    {
        name: "Dr. Arvind Kumar",
        specialization: "General Medicine",
        department: "General Medicine",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },

    // =========================
    // CARDIOLOGY
    // =========================

    {
        name: "Dr. Anil Kumar",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "12 years",
        availableDays: ["Monday", "Wednesday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Priya Sharma",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Arjun Rao",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "11 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Meera Nair",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "8 years",
        availableDays: ["Monday", "Wednesday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Vikram Singh",
        specialization: "Cardiology",
        department: "Cardiology",
        experience: "10 years",
        availableDays: ["Tuesday", "Wednesday", "Thursday"],
        availableTime: "02:00 PM - 06:00 PM"
    },

    // =========================
    // PEDIATRICS
    // =========================

    {
        name: "Dr. Neha Kapoor",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },
    {
        name: "Dr. Rohan Mehta",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "7 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Asha Rao",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "12 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Sanjay Kumar",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Divya Menon",
        specialization: "Pediatrics",
        department: "Pediatrics",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    },

    // =========================
    // ORTHOPEDICS
    // =========================

    {
        name: "Dr. Ajay Verma",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "11 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },
    {
        name: "Dr. Kavya Reddy",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Suresh Rao",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "13 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Nithin Kumar",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "7 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Ananya Singh",
        specialization: "Orthopedics",
        department: "Orthopedics",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    },

    // =========================
    // DERMATOLOGY
    // =========================

    {
        name: "Dr. Pooja Sharma",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },
    {
        name: "Dr. Vivek Rao",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "11 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Riya Menon",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Akash Verma",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "7 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Shreya Nair",
        specialization: "Dermatology",
        department: "Dermatology",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    },

    // =========================
    // ENT
    // =========================

    {
        name: "Dr. Naveen Kumar",
        specialization: "ENT",
        department: "ENT",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },
    {
        name: "Dr. Swathi Rao",
        specialization: "ENT",
        department: "ENT",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Harish Sharma",
        specialization: "ENT",
        department: "ENT",
        experience: "12 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Deepa Nair",
        specialization: "ENT",
        department: "ENT",
        experience: "7 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Rohit Verma",
        specialization: "ENT",
        department: "ENT",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    },

    // =========================
    // GYNECOLOGY
    // =========================

    {
        name: "Dr. Lakshmi Rao",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "12 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:00 AM - 01:00 PM"
    },
    {
        name: "Dr. Megha Sharma",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "9 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Anjali Nair",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "11 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "11:00 AM - 03:00 PM"
    },
    {
        name: "Dr. Kavitha Kumar",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "8 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "09:30 AM - 01:30 PM"
    },
    {
        name: "Dr. Shalini Verma",
        specialization: "Gynecology",
        department: "Gynecology",
        experience: "10 years",
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "02:00 PM - 06:00 PM"
    }
];

async function seedDoctors() {
    try {
        await mongoose.connect(MONGO_URI);

        console.log("MongoDB connected successfully.");

        // Remove old doctor records
        await Doctor.deleteMany({});

        console.log("Old doctors deleted.");

        // Insert new doctors
        await Doctor.insertMany(doctors);

        console.log(`${doctors.length} doctors added successfully.`);

        // Count doctors by specialization
        const specializations = [
            "General Medicine",
            "Cardiology",
            "Pediatrics",
            "Orthopedics",
            "Dermatology",
            "ENT",
            "Gynecology"
        ];

        for (const specialization of specializations) {
            const count = await Doctor.countDocuments({
                specialization: specialization
            });

            console.log(`${specialization}: ${count} doctors`);
        }

        await mongoose.connection.close();

        console.log("MongoDB connection closed.");
        console.log("Doctor seeding completed successfully.");

    } catch (error) {
        console.error("Doctor seeding error:", error);

        try {
            await mongoose.connection.close();
        } catch (closeError) {
            console.error("Connection close error:", closeError);
        }
    }
}

seedDoctors();