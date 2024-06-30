// Import necessary modules
const express = require('express');
const authController = require('../controllers/authController');
const { registerValidator } = require('../helpers/validator');

// Create a router instance
const router = express.Router();

// Define routes
router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.post('/register', registerValidator, authController.registerUser);

// Export the router
module.exports = router;