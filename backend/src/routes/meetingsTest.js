// Route to get all meetings for a student
// router.get("/student", verifyToken, async (req, res) => {
//     try {
//       const meetings = await Meeting.find({ student: req.user.id }).populate("expert", "fullName");
//       res.json(meetings);
//     } catch (error) {
//       console.error("Error fetching meetings:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });
  
  // Route to get all meetings for an expert
//   router.get("/expert", verifyToken, async (req, res) => {
//     try {
//       const meetings = await Meeting.find({ expert: req.user.id }).populate("student", "fullName");
//       res.json(meetings);
//     } catch (error) {
//       console.error("Error fetching expert meetings:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });
  
  // Route to update meeting status (e.g., complete or cancel)
//   router.put("/:id/status", verifyToken, async (req, res) => {
//     try {
//       const { status } = req.body;
  
//       if (!["scheduled", "completed", "canceled"].includes(status)) {
//         return res.status(400).json({ message: "Invalid status" });
//       }
  
//       const meeting = await Meeting.findById(req.params.id);
//       if (!meeting) {
//         return res.status(404).json({ message: "Meeting not found" });
//       }
  
//       if (meeting.student.toString() !== req.user.id && meeting.expert.toString() !== req.user.id) {
//         return res.status(403).json({ message: "Unauthorized" });
//       }
//       meeting.status = status;
//       await meeting.save();
//       res.json({ message: "Meeting status updated", meeting });
  
//     } catch (error) {
//       console.error("Error updating meeting status:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });