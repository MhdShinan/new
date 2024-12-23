
const express = require('express');
const router = express.Router();
const getStartedController = require('../controllers/getStartedController');

// POST endpoint for form submission
router.post('/getstarted', getStartedController);

module.exports = router;
