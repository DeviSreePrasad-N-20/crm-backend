// routes/enquiryRoutes.js
const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const auth = require('../middlewares/auth');

// Public route for client lead submission
router.post('/public', enquiryController.createPublicEnquiry);

// Protected routes (require counselor login)
router.get('/public', auth, enquiryController.getUnclaimedEnquiries);
router.get('/private', auth, enquiryController.getClaimedEnquiries);
router.patch('/:id/claim', auth, enquiryController.claimEnquiry);

module.exports = router;
