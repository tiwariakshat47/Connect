const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://atiwari5:connect@cluster0.4xcqha3.mongodb.net", {
  })
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server running on port 8000");
});

const User = require("./models/user");
const Message = require("./models/message");


//Adding a new account
app.post("/register", (req,res) => {
  const {name, email, password, image} = req.body;

  const newUser = new User ({name, email, password, image})

  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully "});
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.status(500).json({ message: "Error registering the user"});
    });

});

//Adding a new class to an account
/*---*/

//Function creating token for user

const createToken = (userId) => {

  const payload = {
    userId: userId,
  };

  const token = jwt.sign(payload, "lesecretkeyhaha", { expiresIn: "1h"});

  return token;
}

//endpoint for logging in
app.post("/login", (req,res) => {
  const {email, password} = req.body;

  //check if email and pass are provided
  if (!email || !password) {
    return res.status(404).json({message: "Email and the password are required "})
  }

  //Check for user in database
  User.findOne({email}).then((user) => {
    if (!user) {
      //user not found
      return res.status(404).json({message: "User not found"})
    }

    //compare the provided passwords with the password in the database 
    if (user.password !== password) {
      return res.status(404).json({message: "Invalid Password!"})
    } 

    const token = createToken(user.id);
    res.status(200).json({token})
  }).catch((error) => {
    console.log("Error finding user", error);
    res.status(500).json({message: "Internal Server Error"})

  })
})