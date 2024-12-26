const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String }, // Store the image path
  teamType: { type: String, enum: ['management', 'development'], required: true },
  linkedin: { type: String }, // LinkedIn link for management team
  whatsapp: { type: String }, // WhatsApp link for management team
  website: { type: String } // Website link for management team
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
