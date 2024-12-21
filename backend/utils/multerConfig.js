const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Testimonial = require('../models/Testimonial');
const { unlink } = require('fs/promises');


// make directory 
const testimonialsDir = path.join(__dirname, '../uploads/testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

const managementTeamDir = path.join(__dirname, '../uploads/team/ManagementTeam');
if (!fs.existsSync(managementTeamDir)) {
  fs.mkdirSync(managementTeamDir, { recursive: true });
}


const developmentTeamDir = path.join(__dirname, '../uploads/team/DevelopmentTeam');
if (!fs.existsSync(developmentTeamDir)) {
  fs.mkdirSync(developmentTeamDir, { recursive: true });
}

const satisfiedClientsDir = path.join(__dirname, '../uploads/satisfiedclients');
if (!fs.existsSync(satisfiedClientsDir)) {
  fs.mkdirSync(satisfiedClientsDir, { recursive: true });
}

// saving to the folder 
const testimonialsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, testimonialsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const teamStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const teamType = req.body.teamType;
    let folderPath;
    if (teamType === 'management') {
      folderPath = managementTeamDir;
    } else if (teamType === 'development') {
      folderPath = developmentTeamDir;
    } else {
      return cb(new Error('Invalid team type'), false);
    }
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const satisfiedClientsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, satisfiedClientsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});



// filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only image files are allowed!'), false);
  }
};


// Multer instances
const upload = multer({ storage: testimonialsStorage, fileFilter });
const uploadTeam = multer({ storage: teamStorage, fileFilter });
const uploadSatisfiedClients = multer({ storage: satisfiedClientsStorage, fileFilter });

module.exports = {
  upload, // Ensure `upload` is being exported
  uploadTeam,
  uploadSatisfiedClients,
};
