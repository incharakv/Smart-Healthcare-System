const express = require("express");
const mongoose = require("mongoose");

const Patient = require("./modelss/patient");
const Doctor = require("./modelss/Doctor.js");
const Appointment = require("./modelss/appointment");

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());

app.use(express.static("public"));


// ===============================
// HOME PAGE
// ===============================

app.get("/", (req, res) => {

    res.sendFile(
        __dirname + "/public/index.html"
    );

});
// ===============================
// REGISTER PATIENT
// ===============================

app.post("/patients", async (req, res) => {

    try {

        const patient = new Patient(req.body);

        await patient.save();

        res.status(201).json({

            message: "Patient registered successfully!",

            patient: patient

        });

    } catch (error) {

        console.log(
            "Patient Error:",
            error
        );

        res.status(400).json({

            message: "Patient registration failed",

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

        const doctorsWithAppointments =
            await Promise.all(

                doctors.map(async (doctor) => {

                    const appointmentCount =
                        await Appointment.countDocuments({
                            doctorId: doctor._id
                        });

                    return {
                        ...doctor.toObject(),
                        appointmentCount:
                            appointmentCount
                    };

                })

            );

        res.json(doctorsWithAppointments);

    } catch (error) {

        console.log(
            "Doctor Error:",
            error
        );

        res.status(500).json({

            message: "Failed to fetch doctors",

            error: error.message

        });

    }

});
// ===============================
// DOCTOR AVAILABILITY
// ===============================

app.get("/doctors/availability", async (req, res) => {

    try {

        const {
            specialization,
            appointmentDate,
            appointmentTime
        } = req.query;

        if (!specialization ||
            !appointmentDate ||
            !appointmentTime) {

            return res.status(400).json({
                message:
                    "Please provide specialization, date and time."
            });
        }

        const selectedDate =
            new Date(appointmentDate + "T00:00:00");

        const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        const selectedDay =
            dayNames[selectedDate.getDay()];

        const doctors =
            await Doctor.find({
                specialization: specialization
            });

        const availableDoctors =
            doctors.filter(function (doctor) {

                return doctor.availableDays &&
                    doctor.availableDays.includes(
                        selectedDay
                    );

            });

        const doctorsWithAppointments =
            await Promise.all(

                availableDoctors.map(
                    async function (doctor) {

                        const appointmentCount =
                            await Appointment.countDocuments({
                                doctorId: doctor._id,
                                appointmentDate:
                                    appointmentDate
                            });

                        return {
                            ...doctor.toObject(),

                            appointmentCount:
                                appointmentCount
                        };

                    }
                )

            );

        res.json(doctorsWithAppointments);

    } catch (error) {

        console.log(
            "Availability Error:",
            error
        );

        res.status(500).json({

            message:
                "Failed to check doctor availability",

            error:
                error.message

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
            doctorName,
            appointmentDate,
            appointmentTime
        } = req.body;


        const doctor =
            await Doctor.findOne({
                name: doctorName
            });


        if (!doctor) {

            return res.status(404).json({

                message:
                    "Doctor not found in MongoDB"

            });

        }


        const appointmentCount =
            await Appointment.countDocuments({

                doctorId: doctor._id,

                appointmentDate:
                    appointmentDate

            });


        const tokenNumber =
            appointmentCount + 1;


        const appointment =
            new Appointment({

                patientName:
                    patientName,

                doctorId:
                    doctor._id,

                doctorName:
                    doctor.name,

                appointmentDate:
                    appointmentDate,

                appointmentTime:
                    appointmentTime,

                tokenNumber:
                    tokenNumber

            });


        await appointment.save();


        res.status(201).json({

            message:
                "Appointment booked successfully!",

            appointment:
                appointment

        });


    } catch (error) {

        console.log(
            "Appointment Error:",
            error
        );


        res.status(400).json({

            message:
                "Appointment booking failed",

            error:
                error.message

        });

    }

});
// ===============================
// CONNECT MONGODB
// ===============================

mongoose
    .connect("mongodb://127.0.0.1:27017/smart_healthcare")
    .then(() => {

        console.log(
            "MongoDB connected successfully!"
        );

    })
    .catch((error) => {

        console.log(
            "MongoDB connection error:",
            error
        );

    });
    // ===============================
// START SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `Server is running on http://localhost:${PORT}`
    );

});
