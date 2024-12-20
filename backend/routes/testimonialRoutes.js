// In testimonialRoutes.js
const express = require('express');
const { getTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

const router = express.Router();

// GET: Fetch all testimonials
router.get('/testimonials', getTestimonials);

// POST: Add a new testimonial with image upload
router.post('/testimonials', createTestimonial);

router.delete('/testimonials/:id', deleteTestimonial);

module.exports = router;
