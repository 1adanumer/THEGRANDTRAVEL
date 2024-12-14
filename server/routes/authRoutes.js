// /routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Assuming User model is in the /models directory
const router = express.Router();

// User signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
