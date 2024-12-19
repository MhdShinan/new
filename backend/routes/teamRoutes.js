// backend/routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const { createTeamMember, getTeamMembers, upload } = require('../controllers/teamController');

// POST route to create a new team member (with image upload)
router.post('/create', upload.single('image'), createTeamMember);

// GET route to fetch team members (by teamType)
router.get('/', getTeamMembers);

module.exports = router;
