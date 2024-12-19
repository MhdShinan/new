const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  contactNo: String,
  email: String,
  message: String,
  service: String,
  platform: String,
  quantity: Number,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FormSubmission', formSchema);
