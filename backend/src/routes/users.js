const express = require("express");
const User = require("../models/User");
const { authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Get all users (Admin only)
router.get("/experts", async (req, res) => {
  try {
    const users = await User.find({ profession: 'Expert' }).select("-password");
    if (users.length === 0) {
      return res.status(404).json({ message: "No experts found" });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
