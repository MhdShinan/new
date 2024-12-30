const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


const fs = require('fs');

const app = express();

// Middleware
app.use(cors({
  origin : "*",
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}
));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public ')));
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to RtechSolutionPortfolio'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
// const emailRoutes = require('./routes/emailRoutes');
const formRoutes = require('./routes/formRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const teamRoutes = require('./routes/teamRoutes');
const satisfiedClientsRouter = require('./routes/satisfiedClientRoutes');
const contactRoutes = require('./routes/contactRoutes');
const getStartedRoutes = require('./routes/getStartedRoutes');
const applyRoutes = require('./routes/applyRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api', getStartedRoutes);
// app.use('/api/send-email', emailRoutes);
app.use('/api/form-email', formRoutes);
app.use('/api', testimonialRoutes); 
app.use('/api/team', teamRoutes);
app.use('/api/satisfiedclients', satisfiedClientsRouter);
app.use('/api', applyRoutes);

app.get('/test-upload-dir', (req, res) => {
  const dir = path.join(__dirname, 'uploads/testimonials'); // Path to your testimonials folder
  try {
    // Check if the directory exists
    if (!fs.existsSync(dir)) {
      // Create the directory if it doesn't exist
      fs.mkdirSync(dir, { recursive: true });
    }
    res.send('Directory is accessible and writable.');
  } catch (error) {
    console.error('Error accessing upload directory:', error.message);
    res.status(500).send('Directory is not accessible.');
  }
});



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res)=>{
      res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
