const express = require("express");
const Meeting = require("../models/Meeting");
const { authorizeRoles, authenticateToken } = require("../middleware/auth");
const mongoose = require("mongoose");


const router = express.Router();

// router.post("/book", authorizeRoles("student", "eleve"), async (req, res) => {
//   try {
//     const { expert, date } = req.body;

//     if (!expert || !date) {
//       return res.status(400).json({ message: "Please provide expert and date." });
//     }

//     console.log(expert, date);
//     const meeting = new Meeting({
//       student: req.user.id,
//       expert,
//       date,
//     });

//     await meeting.save();
//     res.status(201).json({ message: "Meeting booked successfully" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });

router.post("/book", authenticateToken, async (req, res) => {
  try {
    const { expert, date } = req.body;

    if (!expert || !date) {
      return res.status(400).json({ message: "Expert and date are required" });
    }

    const newMeeting = new Meeting({
      student: req.user.id, // Extracted from token
      expert,
      date,
      status: "scheduled",
    });

    await newMeeting.save();
    res.status(201).json({ message: "Meeting booked successfully", meeting: newMeeting });

  } catch (error) {
    console.error("Error booking meeting:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Get all meetings for an expert
router.get("/expert", authorizeRoles("Expert"), async (req, res) => {
    try {
        // Retrieve scheduled meetings for the given expert
        const meetings = await Meeting.find({expert: req.user.id})

        res.json(meetings);
      } catch (error) {
        console.error("Error retrieving meetings:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
});

// Get all meetings for a student/eleve
router.get("/my-meetings", authorizeRoles("student", "eleve"), async (req, res) => {
  try {
    const meetings = await Meeting.find({ student: req.user.id }).populate("expert", "name email");
    res.json(meetings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// all meetings
router.get("/all", async (req, res) => {
    try {
        const meetings = await Meeting.find()
          .populate("student", "name email") // Populate student details
          .populate("expert", "name email"); // Populate expert details
    
        res.json(meetings);
      } catch (error) {
        console.error("Error retrieving meetings:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
})

module.exports = router;
