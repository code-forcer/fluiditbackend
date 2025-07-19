const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'info.html'));
});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Connected to MongoDB'))

    .catch(err => console.error('MongoDB error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});
