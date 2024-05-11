const reviewModel = require("../models/reviewModel");

exports.getReview = async (req, res) => {
  try {
    // console.log("Kom igen nu!");
    const allReviews = await reviewModel.find();
    // console.log("Kom igen nu2!");
    return res.status(200).json(allReviews);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const theReview = await reviewModel.find({ id: id });
    return res.status(200).json(theReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createReview = async (req, res) => {
  const { movie, user, rating, comment } = req.body;

  try {
    const newReview = new reviewModel({
      movie: movie,
      user: user,
      rating: rating,
      comment: comment,
    });
    const insertedReview = await newReview.save();
    return res.status(201).json(insertedReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateReview = async (req, res) => {
  const { id, movie, user, rating, comment } = req.body;

  try {
    await reviewModel.updateOne(
      { id: id },
      {
        movie: movie,
        user: user,
        rating: rating,
        comment: comment,
      }
    );
    const updatedReview = await reviewModel.find();
    return res.status(200).json(updatedReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params; // Hämta ID från URL:params
  try {
    const deleteReview = await reviewModel.deleteOne({ _id: id }); // Använd _id för att söka efter recensionen
    return res.status(200).json(deleteReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getReviewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const getReview = await reviewModel.findById(id);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteReviewById = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedReview = await reviewModel.findByIdAndDelete(id);
    return res.status(200).json(deletedReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
