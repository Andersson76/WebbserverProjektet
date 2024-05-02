const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MovieReviews", ReviewSchema);
