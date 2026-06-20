require("dotenv").config();
const mongoose = require("mongoose");

const User = require("../models/User");
const Business = require("../models/Business");
const Insight = require("../models/Insight");
const Review = require("../models/Review");

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    await User.deleteMany();
    await Business.deleteMany();
    await Insight.deleteMany();
    await Review.deleteMany();

    await User.create({
      email: "admin@gmail.com",
      password: "123456",
    });

    await Business.create({
      name: "ABC Salon",
      category: "Beauty Salon",
      address: "Hyderabad",
      phone: "9876543210",
      rating: 4.2,
      total_reviews: 120,
    });

    await Insight.create({
      profile_views: 1200,
      search_views: 800,
      website_clicks: 150,
      phone_calls: 60,
      direction_requests: 40,
    });

    await Review.insertMany([
      {
        name: "Ravi",
        rating: 5,
        comment: "Good service",
        date: "2026-03-20",
      },
      {
        name: "Priya",
        rating: 4,
        comment: "Nice experience",
        date: "2026-03-18",
      },
    ]);

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Seed error:", error);
    process.exit(1);
  }
};

seedData();