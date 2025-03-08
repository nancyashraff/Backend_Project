const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Get doctor's own profile
exports.getDoctorProfile = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.user.id).select('-password');
        if (!doctor) {
            const error = new Error('Doctor not found');
            error.statusCode = 404;
            return next(error);
        }
        res.status(200).json(doctor);
    } catch (error) {
        next(error);
    }
};

// Update doctor's profile
exports.updateDoctorProfile = async (req, res, next) => {
    try {
        const updates = { email: req.body.email, phone: req.body.phone, birthDate: req.body.birthDate };
        const doctor = await Doctor.findByIdAndUpdate(req.user.id, updates, { new: true });

        if (!doctor) {
            const error = new Error('Doctor not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({ message: 'Profile updated successfully', doctor });
    } catch (error) {
        next(error);
    }
};

// Get all assigned patients
exports.getAssignedPatients = async (req, res, next) => {
    try {
        const patients = await Patient.find({ assignedDoctor: req.user.id }, 'firstName lastName age phone');
        res.status(200).json(patients);
    } catch (error) {
        next(error);
    }
};
