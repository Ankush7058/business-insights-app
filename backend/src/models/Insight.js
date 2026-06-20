const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema({
  profile_views: Number,
  search_views: Number,
  website_clicks: Number,
  phone_calls: Number,
  direction_requests: Number,
});

module.exports = mongoose.model("Insight", insightSchema);