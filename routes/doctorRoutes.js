const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protect all doctor routes (only authenticated doctors can access)
router.use(authMiddleware, roleMiddleware('doctor'));

// Get doctor's own profile
router.get('/profile', doctorController.getDoctorProfile);

// Update doctor's own profile
router.patch('/profile', doctorController.updateDoctorProfile);

// Get all assigned patients
router.get('/patients', doctorController.getAssignedPatients);

module.exports = router;
