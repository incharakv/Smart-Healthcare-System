const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    availableDays: {
        type: [String],
        required: true
    },

    availableTime: {
        type: String,
        required: true
    }

});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;