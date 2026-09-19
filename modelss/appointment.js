const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: true,
            trim: true
        },

        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },

        doctorName: {
            type: String,
            required: true,
            trim: true
        },

        appointmentDate: {
            type: String,
            required: true
        },

        appointmentTime: {
            type: String,
            required: true
        },

        tokenNumber: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
);

module.exports = Appointment;