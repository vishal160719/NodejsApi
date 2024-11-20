// Import Mongoose
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// Create the User Model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
