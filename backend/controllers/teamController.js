// backend/controllers/teamController.js
const TeamMember = require('../models/TeamMember');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const teamType = req.body.teamType || 'development'; // Default to 'development'
    const folderPath = path.join(__dirname, '../uploads/team', teamType === 'management' ? 'ManagementTeam' : 'DevelopmentTeam');
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = Date.now() + ext;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

// Create a new team member
const createTeamMember = async (req, res) => {
  const { name, position, teamType } = req.body;
  const image = req.file ? `/uploads/team/${teamType === 'management' ? 'ManagementTeam' : 'DevelopmentTeam'}/${req.file.filename}` : '';

  try {
    const newMember = new TeamMember({ name, position, image, teamType });
    await newMember.save();
    res.status(201).json({ message: 'Team member created successfully', member: newMember });
  } catch (error) {
    console.error('Error creating team member:', error);
    res.status(500).json({ error: 'Failed to create team member' });
  }
};

// Get team members by type
const getTeamMembers = async (req, res) => {
  const { teamType } = req.query;

  try {
    const members = await TeamMember.find({ teamType });
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
};

module.exports = { createTeamMember, getTeamMembers, upload };
