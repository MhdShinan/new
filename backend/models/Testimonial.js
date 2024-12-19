const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String },  // Store relative image path
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
