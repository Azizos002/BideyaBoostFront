const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  profession: { type: String, enum: ["Student", "Eleve", "Expert", "Parent"], required: true },
  birthDate: { type: Date },
  scholarLevel: { type: String },
  availabalities: { type: String, enum: ["Complete", "Available"] },
  // child: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // For parents
  // progress: { type: Object, default: {} },
  // Progress tracking
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;

    // In the  User  model, we have the following fields:
    
    // name : The name of the user.
    // email : The email address of the user.
    // password : The hashed password of the user.
    // role : The role of the user. It can be one of the following:  student ,  eleve ,  expert , or  parent .
    // child : The ID of the child user. This field is only for parents.
    // progress : An object to track the progress of the user.
    // Now, let’s create the  Course  model.