// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Registration endpoint
router.post('/register', employeeController.register);

// Login endpoint
router.post('/login', employeeController.login);

module.exports = router;
