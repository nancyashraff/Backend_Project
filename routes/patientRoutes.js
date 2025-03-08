const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protect all patient routes (only authenticated patients can access)
router.use(authMiddleware, roleMiddleware('patient'));

// Get patient's own profile
router.get('/profile', patientController.getPatientProfile);

// Update patient's profile (except gender)
router.patch('/profile', patientController.updatePatientProfile);

// Get all doctors
router.get('/doctors', patientController.getAllDoctors);

module.exports = router;
