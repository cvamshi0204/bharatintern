const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/registration-form', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Set up static files (CSS)
app.use(express.static('public'));

// Set up HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send('Registration successful!');
  } catch (error) {
    res.status(500).send('Error during registration.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

