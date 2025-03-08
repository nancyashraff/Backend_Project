const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

// Get patient's own profile
exports.getPatientProfile = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.user.id).select('-password');
        if (!patient) {
            const error = new Error('Patient not found');
            error.statusCode = 404;
            return next(error);
        }
        res.status(200).json(patient);
    } catch (error) {
        next(error);
    }
};

// Update patient's profile (except gender)
exports.updatePatientProfile = async (req, res, next) => {
    try {
        const updates = { email: req.body.email, phone: req.body.phone, birthDate: req.body.birthDate };
        const patient = await Patient.findByIdAndUpdate(req.user.id, updates, { new: true });

        if (!patient) {
            const error = new Error('Patient not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({ message: 'Profile updated successfully', patient });
    } catch (error) {
        next(error);
    }
};

// Get all doctors
exports.getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find({}, 'firstName lastName phone');
        res.status(200).json(doctors);
    } catch (error) {
        next(error);
    }
};
