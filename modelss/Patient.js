const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 1,
            max: 120
        },

        gender: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        preferredLanguage: {
            type: String,
            enum: ["English", "Kannada", "Hindi"],
            default: "English"
        }
    },
    {
        timestamps: true
    }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;