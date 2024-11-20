// Import required modules
const express = require('express');
const User = require('../models/user'); // Import the User model

// Create a router
const router = express.Router();

/**
 * @route GET /api/users
 * @desc Get all users
 */
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

/**
 * @route GET /api/users/:id
 * @desc Get a user by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

/**
 * @route POST /api/users
 * @desc Add a new user
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validate input
    if (!name || !email || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new user
    const newUser = new User({ name, email, age });
    await newUser.save(); // Save the user to the database
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
  }
});

/**
 * @route DELETE /api/users/:id
 * @desc Delete a user by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); // Delete user by ID
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Export the router
module.exports = router;
