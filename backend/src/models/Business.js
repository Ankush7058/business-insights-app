const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
  phone: String,
  rating: Number,
  total_reviews: Number,
});

module.exports = mongoose.model("Business", businessSchema);