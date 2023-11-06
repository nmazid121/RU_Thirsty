  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const mongoose = require('mongoose');

  const app = express();
  const PORT = 5000;

  app.use(cors({
  }));  
  app.use(bodyParser.json());

  // Connect to MongoDB Atlas
  const mongoUri = 'mongodb+srv://newUserYuh:FartPoop@cluster0.fv35vec.mongodb.net/?retryWrites=true&w=majority';
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
    description: String,
    lat: Number,
    lng: Number,
    name: String,
  });
  const Marker = mongoose.model('Marker', markerSchema);

  // Express routes
  app.post('/api/markers', (req, res) => {
    const marker = new Marker(req.body);
    marker.save()
      .then(() => {
        res.status(201).send('Marker saved');
      })
      .catch(err => {
        res.status(500).send('Error saving marker');
      });
  });

  app.get('/api/markers', (req, res) => {
    Marker.find({})
      .then(markers => {
        res.json(markers);
      })
      .catch(err => {
        res.status(500).send('Error retrieving markers');
      });
  });

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
  });