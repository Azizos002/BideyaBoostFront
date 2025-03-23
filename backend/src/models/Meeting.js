const mongoose = require("mongoose");

const MeetingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  expert: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["scheduled", "completed", "canceled"], default: "scheduled" },
}, { timestamps: true });

const Meeting = mongoose.model("Meeting", MeetingSchema);
module.exports = Meeting;
// In the  Meeting  model, we have the following fields:
//   -  student  : The student who is scheduled to meet with the expert. This field is a reference to the  User  model.
//   -  expert  : The expert who is scheduled to meet with the student. This field is a reference to the  User  model.
//   -  date  : The date and time of the meeting.
//   -  status  : The status of the meeting. This field can be one of the
//     following:  scheduled ,  completed , or  canceled . The default value is  scheduled .
// Now, let’s create the  Progress  model.

// const ProgressSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     progress: { type: Object, required: true },
//     }, { timestamps: true });
//     const Progress = mongoose.model("Progress", ProgressSchema);
//     module.exports = Progress;

    // In the  Progress  model, we have the following fields:
//   -  user  : The user for whom the progress is being tracked. This field is a reference to the  User  model.
//   -  progress  : An object that contains the progress data for the user.
//     This object can have any structure, depending on the progress tracking requirements.
//     For example, it can contain the progress of the user in different courses or subjects.
//     The progress data can be updated over time to reflect the user’s progress.
//     The  Progress  model will be used to track the progress of users in the application.
//     Now that we have created the models, let’s move on to creating the routes for the application.
//     Create the routes for the application
//     In the  routes  directory, create a new file named  meetings.js  and add the following code:
//     const express = require("express");
//     const router = express.Router();
//     const Meeting = require("../models/Meeting");
//     const { authenticateToken } = require("../middleware/auth");
//     // Get all meetings
//     router.get("/", authenticateToken, async (req, res) => {
//       try {
//         const meetings = await Meeting.find().populate("student expert");
//         res.json(meetings);
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
//     });
//     // Create a new meeting
//     router.post("/", authenticateToken, async (req, res) => {
//       const meeting = new Meeting({
//         student: req.body.student,
//         expert: req.body.expert,
//         date: req.body.date,
//       });
//       try {
//         const newMeeting = await meeting.save();
//         res.status(201).json(newMeeting);
//       } catch (err) {
//         res.status(400).json({ message: err.message });
//       }
//     });
//     // Update a meeting
//     router.patch("/:id", authenticateToken, async (req, res) => {
//       try {
//         const meeting = await Meeting.findById(req.params.id);
//         if (meeting == null) {
//           return res.status(404).json({ message: "Meeting not found" });
//         }
//         if (req.body.student != null) {
//           meeting.student = req.body.student;
//         }
//         if (req.body.expert != null) {
//           meeting.expert = req.body.expert;
//         }

//         if (req.body.date != null) {
//           meeting.date = req.body.date;
//         }
//         const updatedMeeting = await meeting.save();
//         res.json(updatedMeeting);
//       } catch (err) {
//         res.status(400).json({ message: err.message });
//       }
//     });
//     // Delete a meeting
//     router.delete("/:id", authenticateToken, async (req, res) => {
//       try {
//         const meeting = await Meeting.findById(req.params.id);
//         if (meeting == null) {
//           return res.status(404).json({ message: "Meeting not found" });
//         }
//         await meeting.remove();
//         res.json({ message: "Meeting deleted" });
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
//     });
//     module.exports = router;
//     In the  meetings.js  file, we have defined the following routes:
//     -  GET / : This route fetches all the meetings from the database and returns them as a JSON response.
//     -  POST / : This route creates a new meeting in the database based on the request body and returns the created meeting as a JSON response.
//     -  PATCH /:id : This route updates an existing meeting in the database based on the request body and the meeting ID and returns the updated meeting as a JSON response.
//     -  DELETE /:id : This route deletes a meeting from the database based on the meeting
//     -  GET /:id : This route fetches a meeting from the database based on the
//     -  POST /:id/join : This route allows a user to join a meeting by updating the meeting status to  joined .
//     -  POST /:id/leave : This route allows a user to leave a meeting by updating the meeting status to  left .
//     -  POST /:id/complete : This route allows a user to mark a meeting as completed by updating the meeting status to  completed .
//     -  POST /:id/cancel : This route allows a user to cancel a meeting by updating the meeting status to  canceled .
//     -  POST /:id/reschedule : This route allows a user to reschedule a meeting by updating the meeting date.
//     Now, let’s create the routes for the progress tracking functionality.
//     Create the routes for progress tracking
//     In the  routes  directory, create a new file named  progress.js  and add the following code:
//     const express = require("express");
//     const router = express.Router();
//     const Progress = require("../models/Progress");
//     const { authenticateToken } = require("../middleware/auth");
//     // Get progress for a user
//     router.get("/:userId", authenticateToken, async (req, res) => {
//       try {
//         const progress = await Progress.findOne({ user: req.params.userId });
//         if (progress == null) {
//           return res.status(404).json({ message: "Progress not found" });
//         }
//         res.json(progress);
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
//     });
//     // Update progress for a user
//     router.patch("/:userId", authenticateToken, async (req, res) => {

