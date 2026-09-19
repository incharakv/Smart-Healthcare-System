const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Patient = require("./modelss/Patient");
const Doctor = require("./modelss/Doctor");
const Appointment = require("./modelss/appointment");

const app = express();
const PORT = 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));


// ===============================
// MONGODB CONNECTION
// ===============================

const MONGO_URI = "mongodb://127.0.0.1:27017/smart_healthcare";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });


// ===============================
// HOME PAGE
// ===============================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// ===============================
// PATIENT REGISTRATION
// ===============================

app.post("/patients", async (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            phone,
            email,
            preferredLanguage
        } = req.body;

        // Basic validation
        if (!name || !age || !gender || !phone || !email) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const patient = new Patient({
            name: name,
            age: age,
            gender: gender,
            phone: phone,
            email: email,
            preferredLanguage: preferredLanguage || "English"
        });

        const savedPatient = await patient.save();

        res.status(201).json({
            success: true,
            message: "Patient registered successfully.",
            patient: savedPatient
        });

    } catch (error) {
        console.error("Patient registration error:", error);

        res.status(500).json({
            success: false,
            message: "Patient registration failed.",
            error: error.message
        });
    }
});


// ===============================
// GET ALL DOCTORS
// ===============================

app.get("/doctors", async (req, res) => {
    try {
        const doctors = await Doctor.find();

        res.json({
            success: true,
            doctors: doctors
        });

    } catch (error) {
        console.error("Doctor fetch error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch doctors.",
            error: error.message
        });
    }
});


// ===============================
// GET DOCTORS BY SPECIALIZATION
// ===============================

app.get("/doctors/specialization/:specialization", async (req, res) => {
    try {
        const specialization = req.params.specialization;

        const doctors = await Doctor.find({
            specialization: specialization
        });

        res.json({
            success: true,
            doctors: doctors
        });

    } catch (error) {
        console.error("Specialization search error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to search doctors.",
            error: error.message
        });
    }
});


// ===============================
// GET SINGLE DOCTOR
// ===============================

app.get("/doctors/:id", async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found."
            });
        }

        res.json({
            success: true,
            doctor: doctor
        });

    } catch (error) {
        console.error("Single doctor fetch error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch doctor.",
            error: error.message
        });
    }
});


// ===============================
// BOOK APPOINTMENT
// ===============================

app.post("/appointments", async (req, res) => {
    try {
        const {
            patientName,
            doctorId,
            appointmentDate,
            appointmentTime
        } = req.body;

        // Validate required fields
        if (
            !patientName ||
            !doctorId ||
            !appointmentDate ||
            !appointmentTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all appointment details."
            });
        }

        // Find selected doctor
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Selected doctor not found."
            });
        }

        // Count existing appointments for this doctor and date
        const existingAppointments = await Appointment.countDocuments({
            doctorId: doctorId,
            appointmentDate: appointmentDate
        });

        // Generate token
        const tokenNumber = existingAppointments + 1;

        // Create appointment
        const appointment = new Appointment({
            patientName: patientName,
            doctorId: doctorId,
            doctorName: doctor.name,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            tokenNumber: tokenNumber
        });

        const savedAppointment = await appointment.save();

        res.status(201).json({
            success: true,
            message: "Appointment booked successfully.",
            appointment: savedAppointment
        });

    } catch (error) {
        console.error("Appointment booking error:", error);

        res.status(500).json({
            success: false,
            message: "Appointment booking failed.",
            error: error.message
        });
    }
});


// ===============================
// GET PATIENT APPOINTMENTS
// ===============================

app.get("/appointments/patient/:patientName", async (req, res) => {
    try {
        const patientName = req.params.patientName;

        const appointments = await Appointment.find({
            patientName: patientName
        }).populate("doctorId");

        res.json({
            success: true,
            appointments: appointments
        });

    } catch (error) {
        console.error("Patient appointment error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch appointments.",
            error: error.message
        });
    }
});


// ===============================
// GET QUEUE STATUS
// ===============================

app.get(
    "/queue/:doctorId/:appointmentDate",
    async (req, res) => {
        try {
            const doctorId = req.params.doctorId;
            const appointmentDate = req.params.appointmentDate;

            const appointments = await Appointment.find({
                doctorId: doctorId,
                appointmentDate: appointmentDate
            }).sort({ tokenNumber: 1 });

            res.json({
                success: true,
                totalPatients: appointments.length,
                appointments: appointments
            });

        } catch (error) {
            console.error("Queue status error:", error);

            res.status(500).json({
                success: false,
                message: "Unable to fetch queue status.",
                error: error.message
            });
        }
    }
);


// ===============================
// SERVER START
// ===============================

app.listen(PORT, () => {
    console.log("------------------------------------");
    console.log("LifeCare Hospital Server Started");
    console.log(`Open: http://localhost:${PORT}`);
    console.log("------------------------------------");
});