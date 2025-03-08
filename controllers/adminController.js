const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Add a new doctor
exports.addDoctor = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, birthDate, gender, expertiseLevel } = req.body;
        const newDoctor = new Doctor({ firstName, lastName, email, phone, birthDate, gender, expertiseLevel });

        await newDoctor.save();
        res.status(201).json({ message: 'Doctor added successfully', doctorId: newDoctor._id });
    } catch (error) {
        next(error);
    }
};

// Retire a doctor (mark inactive)
exports.retireDoctor = async (req, res, next) => {
    try {
        const { doctorId } = req.params;
        const doctor = await Doctor.findByIdAndUpdate(doctorId, { isActive: false });

        if (!doctor) {
            const error = new Error('Doctor not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({ message: 'Doctor retired successfully' });
    } catch (error) {
        next(error);
    }
};

// Remove a patient
exports.removePatient = async (req, res, next) => {
    try {
        const { patientId } = req.params;
        const patient = await Patient.findByIdAndDelete(patientId);

        if (!patient) {
            const error = new Error('Patient not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({ message: 'Patient removed successfully' });
    } catch (error) {
        next(error);
    }
};

// Get all doctors
exports.getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find({}, 'firstName lastName email phone expertiseLevel');
        res.status(200).json(doctors);
    } catch (error) {
        next(error);
    }
};

// Get all patients
exports.getAllPatients = async (req, res, next) => {
    try {
        const patients = await Patient.find({}, 'firstName lastName email phone age');
        res.status(200).json(patients);
    } catch (error) {
        next(error);
    }
};
