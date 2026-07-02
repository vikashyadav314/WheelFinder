const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Get all cars with optional filters
router.get('/', async (req, res) => {
  try {
    const { brand, fuel, budget, category } = req.query;
    let query = {};
    
    if (brand) query.brand = brand;
    if (fuel) query.fuel = fuel;
    if (category) query.category = category;
    
    // Simplistic budget filter based on strings for now
    if (budget) {
        // e.g., "₹10L - 20L" - this would need parsing in a real app, 
        // for now we'll just match exact or leave it basic
    }

    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get cars by category
router.get('/category/:category', async (req, res) => {
  try {
    const cars = await Car.find({ category: req.params.category });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
