const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  comments: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("review", ReviewSchema);
