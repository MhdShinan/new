const Testimonial = require('../models/Testimonial');
const multer = require('multer');
const path = require('path');
const { upload } = require('../utils/multerConfig');

// Fetch all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

exports.createTestimonial = async (req, res) => {
  const uploadSingle = upload.single('image');

  uploadSingle(req, res, async (err) => {
    if (err) {
      console.error('Multer Error:', err.message);
      return res.status(400).json({ error: err.message });
    }

    const { name, role, company, message, rating } = req.body;

    if (!name || !role || !company || !message || !rating) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    try {
      const newTestimonial = new Testimonial({
        name,
        role,
        company,
        message,
        rating,
        image: req.file ? `/uploads/testimonials/${req.file.filename}` : null,
      });

      await newTestimonial.save();
      res.status(201).json({ success: true, testimonial: newTestimonial });
    } catch (error) {
      console.error('Save Error:', error.message);
      res.status(500).json({ error: 'Failed to create testimonial' });
    }
  });
};

