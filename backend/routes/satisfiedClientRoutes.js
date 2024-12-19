const express = require('express');
const router = express.Router();
const { uploadSatisfiedClients } = require('../utils/multerConfig');
const {
  createClient,
  getClientsBySection,
} = require('../controllers/satisfiedClientController');

// POST: Add a satisfied client
router.post('/', uploadSatisfiedClients.single('image'), createClient);

// GET: Get clients by section
router.get('/:section', getClientsBySection);

module.exports = router;
