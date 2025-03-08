const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    expertiseLevel: { type: String, required: true },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
