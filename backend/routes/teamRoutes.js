const express = require('express');
const router = express.Router();
const { createTeamMember, getTeamMembers, updateTeamMember, deleteTeamMember, upload } = require('../controllers/teamController');

// POST route to create a new team member (with image upload)
router.post('/create', upload.single('image'), createTeamMember);

// GET route to fetch team members (by teamType)
router.get('/', getTeamMembers);

// PATCH route to update team member image
router.patch('/update/:id', upload.single('image'), updateTeamMember);

// DELETE route to delete a team member
router.delete('/delete/:id', deleteTeamMember);

module.exports = router;
