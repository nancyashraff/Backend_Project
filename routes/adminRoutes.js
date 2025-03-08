const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protect all admin routes (only authenticated admins can access)
router.use(authMiddleware, roleMiddleware('admin'));

// Add a new doctor
router.post('/doctors', adminController.addDoctor);

// Retire a doctor
router.patch('/doctors/:doctorId/retire', adminController.retireDoctor);

// Remove a patient
router.delete('/patients/:patientId', adminController.removePatient);

// View all doctors
router.get('/doctors', adminController.getAllDoctors);

// View all patients
router.get('/patients', adminController.getAllPatients);

module.exports = router;
