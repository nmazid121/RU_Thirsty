// Water Droplet model to use for MongoDB

const mongoose = require('./db'); // Import the mongoose object (established connection) from db.js

const waterDropletSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const WaterDroplet = mongoose.model('WaterDroplet', waterDropletSchema);

module.exports = WaterDroplet;
