var mongoose = require("mongoose");

// Creating a Student model
var Student = mongoose.model("Student", {
  studentId: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  gpa: {
    type: String,
    required: true,
    trim: true,
  },
});



module.exports = {
  Student,
};
