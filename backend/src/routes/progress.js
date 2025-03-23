const express = require("express");
const User = require("../models/User");
const { authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Get child's progress (Parent only)
router.get("/child-progress", authorizeRoles("parent"), async (req, res) => {
  try {
    const parent = await User.findById(req.user.id).populate("child", "name progress");
    if (!parent || !parent.child) return res.status(404).json({ message: "No child linked" });
    res.json(parent.child.progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update progress (Expert updates student's progress)
router.put("/update-progress/:studentId", authorizeRoles("expert"), async (req, res) => {
  try {
    const student = await User.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    student.progress = req.body.progress;
    await student.save();
    res.json({ message: "Progress updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
