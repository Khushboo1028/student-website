const express = require("express");
const { Student } = require("./student");
const cors = require("cors");
const path = require("path");

var mongoose = require("mongoose");

var uri = "mongodb+srv://admin:Hello12345@cluster0.2tg4m.mongodb.net/studentDatabase?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

var app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static("public"))
//Serve website
app.use(express.static(path.join(__dirname, "./frontend", "build")));
const port = 3000;
// const port = 3000;

app.listen(port, () => {
  console.log(`Started on port ${port}`);
  console.log(port);

});



//Client side routing fix on page refresh or direct browsing to non-root directory
app.get("/", (req, res) => {
  
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(__dirname, "./frontend",  "build", "index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.post("/students", (req, res) => {
  const studentId = req.body.studentId;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const address = req.body.address;
  const gpa = req.body.gpa;

  var newStudent = new Student({
    studentId,
    firstname,
    lastname,
    email,
    address,
    gpa,
  });

  newStudent.save((err, student) => {
    if (err) {
      res.send(err);
      
    }
    res.send(student);
  });
});

app.get("/students", (_, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Student.find({}, (err, students) => {
    if (err) {
      res.send("Error getting all Students!");
    }
    res.send(students);
  });
});

app.get("/students/:searchTerm", (req, res) => {
  var searchTerm = req.params.searchTerm;
  res.set('Access-Control-Allow-Origin', '*');
  Student.find(  {$or:[{studentId: searchTerm},{firstname:searchTerm},{lastname:searchTerm}]}
    , (err, student) => {
    if (err) {
      res.send("Error finding Student");

    }
    res.send(student);
  });

});

