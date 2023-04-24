const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({ error: "Email already exists." });
    }
    res.status(201).json({ message: "User created successfully." });
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully.", user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logged out successfully." });
});

module.exports = router;
