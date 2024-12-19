const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public ')));
app.use('/uploads', express.static('uploads'));


// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
const emailRoutes = require('./routes/emailRoutes');
const formRoutes = require('./routes/formRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const teamRoutes = require('./routes/teamRoutes');
const satisfiedClientsRouter = require('./routes/satisfiedClientRoutes');


app.use('/api/send-email', emailRoutes);
app.use('/api/form-email', formRoutes);
app.use('/api', testimonialRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/satisfiedclients', satisfiedClientsRouter);


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
