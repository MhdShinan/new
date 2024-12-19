const mongoose = require('mongoose');

const satisfiedClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // Path to the uploaded image
  },
  section: {
    type: Number,
    required: true, // Section 1 or 2
    enum: [1, 2],
  },
});

module.exports = mongoose.model('SatisfiedClient', satisfiedClientSchema);
