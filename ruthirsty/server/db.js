// sets up MongoDB connection

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://RUThirstyUserOne:<BenYuIsGay123>@cluster0.fv35vec.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose; // Export the mongoose object to be used elsewhere in your application

