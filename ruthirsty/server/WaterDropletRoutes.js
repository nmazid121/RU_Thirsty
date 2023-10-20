const express = require('express');
const router = express.Router();
const WaterDroplet = require('./WaterDroplet');

// Create a new water droplet
router.post('/droplets', async (req, res) => {
  try {
    const { lat, lng, name, description } = req.body;
    const newDroplet = new WaterDroplet({ lat, lng, name, description });
    await newDroplet.save();
    res.status(201).json(newDroplet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all water droplets
router.get('/droplets', async (req, res) => {
  try {
    const droplets = await WaterDroplet.find();
    res.json(droplets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a specific water droplet
router.patch('/droplets/:id', async (req, res) => {
  // Update logic here
});

// Delete a specific water droplet
router.delete('/droplets/:id', async (req, res) => {
  // Deletion logic here
});

module.exports = router;