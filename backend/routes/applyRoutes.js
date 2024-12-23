const express = require('express');
const { sendApplicationEmail } = require('../controllers/applyController'); // Adjust to your file structure

const router = express.Router();

router.post('/apply', sendApplicationEmail);

module.exports = router;
