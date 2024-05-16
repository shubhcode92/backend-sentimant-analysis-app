const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connected
mongoose.connect('mongodb://localhost:27017/sentimentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport 
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.get('/', (req, res) => res.send('Server is running!'));

// Start the server at this port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
