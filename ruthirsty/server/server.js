const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
const mongoUri = 'mongodb+srv://newUserYuh:FartPoop@cluster0.fv35vec.mongodb.net/?retryWrites=true&w=majority'; // Replace with your connection string from Atlas
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose Schema and Model for Markers
const markerSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  // Add other fields if necessary
});
const Marker = mongoose.model('Marker', markerSchema);

// Express routes
app.post('/api/markers', (req, res) => {
  const marker = new Marker(req.body);
  marker.save((err) => {
    if (err) {
      res.status(500).send('Error saving marker');
      return;
    }
    res.status(201).send('Marker saved');
  });
});

app.get('/api/markers', (req, res) => {
  Marker.find({}, (err, markers) => {
    if (err) {
      res.status(500).send('Error fetching markers');
      return;
    }
    res.json(markers);
  });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
