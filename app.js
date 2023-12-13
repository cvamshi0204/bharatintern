const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/user-registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/views/signin.html');
});

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.send('Registration successful!');
  } catch (error) {
    res.status(500).send('Error during registration.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

