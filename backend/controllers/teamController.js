// backend/controllers/teamController.js
const TeamMember = require('../models/TeamMember');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Add this import for file system operations

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
  const { name, position, teamType, linkedin, whatsapp, website } = req.body;
  const image = req.file ? `/uploads/team/${teamType === 'management' ? 'ManagementTeam' : 'DevelopmentTeam'}/${req.file.filename}` : '';

  try {
    const newMember = new TeamMember({
      name,
      position,
      image,
      teamType,
      linkedin: teamType === 'management' ? linkedin : undefined,
      whatsapp: teamType === 'management' ? whatsapp : undefined,
      website: teamType === 'management' ? website : undefined
    });

    await newMember.save();
    res.status(201).json({ message: 'Team member created successfully', member: newMember });
  } catch (error) {
    console.error('Error creating team member:', error);
    res.status(500).json({ error: 'Failed to create team member' });
  }
};


// Get team members by type, or all if no teamType is provided
const getTeamMembers = async (req, res) => {
  const { teamType } = req.query;
  
  try {
    let members;
    if (teamType) {
      // If teamType is provided, filter by teamType
      members = await TeamMember.find({ teamType });
    } else {
      // If no teamType is provided, return all members
      members = await TeamMember.find();
    }
    
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
};

// Update team member details (including image update)
const updateTeamMember = async (req, res) => {
  const { id } = req.params;
  const { name, position, teamType, linkedin, whatsapp, website } = req.body;

  try {
    const member = await TeamMember.findById(id);
    if (!member) return res.status(404).json({ error: 'Team member not found' });

    member.name = name || member.name;
    member.position = position || member.position;
    member.teamType = teamType || member.teamType;
    member.linkedin = teamType === 'management' ? linkedin : undefined;
    member.whatsapp = teamType === 'management' ? whatsapp : undefined;
    member.website = teamType === 'management' ? website : undefined;

    if (req.file) {
      if (member.image) {
        const oldImagePath = path.join(__dirname, `../${member.image}`);
        if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
      }

      const folderPath = member.teamType === 'management' ? 'ManagementTeam' : 'DevelopmentTeam';
      member.image = `/uploads/team/${folderPath}/${req.file.filename}`;
    }

    await member.save();
    res.status(200).json({ message: 'Team member updated successfully', member });
  } catch (error) {
    console.error('Error updating team member:', error);
    res.status(500).json({ error: 'Failed to update team member' });
  }
};


// Delete a team member
const deleteTeamMember = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the team member by ID
    const member = await TeamMember.findByIdAndDelete(id);
    
    // Check if member exists and has an image
    if (member && member.image) {
      const imagePath = path.join(__dirname, `../${member.image}`);
      
      // Check if the image file exists before attempting to delete
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath); // Delete the image file
      }
    }
    
    // Send success response
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('Error deleting team member:', error);
    res.status(500).json({ error: 'Failed to delete team member' });
  }
};




module.exports = { createTeamMember, getTeamMembers, updateTeamMember, deleteTeamMember, upload };

