const express = require('express');
const router = express.Router();
const WaterDroplet = require('./WaterDroplet');

// Create a new water droplet
router.post('/droplets', async (req, res) => {
  try {
    const { lat, lng, name, description } = req.body;
    const newDroplet = new WaterDroplet({
      location: {
        type: 'Point',
        coordinates: [lng, lat] // Note that GeoJSON format is [longitude, latitude]
      },
      name,
      description
    });
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
// Update a specific water droplet
router.patch('/droplets/:id', async (req, res) => {
  try {
    const droplet = await WaterDroplet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!droplet) {
      return res.status(404).json({ message: "Droplet not found" });
    }
    res.json(droplet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a specific water droplet
router.delete('/droplets/:id', async (req, res) => {
  try {
    const droplet = await WaterDroplet.findByIdAndDelete(req.params.id);
    if (!droplet) {
      return res.status(404).json({ message: "Droplet not found" });
    }
    res.json({ message: "Droplet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;