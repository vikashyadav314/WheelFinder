require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoMemoryServer } = require('mongodb-memory-server');
const carRoutes = require('./routes/cars');
const authRoutes = require('./routes/auth');
const { seedDB } = require('./seed');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);

// Mock route for wishlist & booking
app.post('/api/wishlist', (req, res) => {
  console.log("Added to wishlist:", req.body);
  res.status(200).json({ message: 'Car added to wishlist!' });
});

app.post('/api/bookings', (req, res) => {
  console.log("Test drive booked:", req.body);
  res.status(200).json({ message: 'Test drive booked successfully!' });
});

// Start MongoDB Memory Server
let mongoServer;
const startServer = async () => {
  try {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    await mongoose.connect(mongoUri);
    console.log('Connected to In-Memory MongoDB');
    
    // Seed the DB on startup
    await seedDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

startServer();
