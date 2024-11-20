// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

// Import routes
const userRoutes = require('./routes/userRoutes');

// Initialize the Express app
const app = express();
app.use(cors());
app.use(express.json());

// Middleware to parse JSON requests
// app.use(bodyParser.json());

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    // Remove deprecated options
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(`MongoDB connection error: ${error}`));

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
