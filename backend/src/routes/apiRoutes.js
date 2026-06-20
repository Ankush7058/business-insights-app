const express = require("express");
const User = require("../models/User");
const Business = require("../models/Business");
const Insight = require("../models/Insight");
const Review = require("../models/Review");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/business", async (req, res) => {
  const business = await Business.findOne();
  res.json({ success: true, data: business });
});

router.get("/insights", async (req, res) => {
  const insights = await Insight.findOne();
  res.json({ success: true, data: insights });
});

router.get("/reviews", async (req, res) => {
  const reviews = await Review.find();
  res.json({ success: true, data: reviews });
});

module.exports = router;