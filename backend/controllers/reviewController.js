const reviewModel = require("../models/reviewModel");

exports.getReview = async (req, res) => {
  try {
    console.log("Kom igen nu!");
    const allReviews = await reviewModel.find();
    console.log("Kom igen nu2!");
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

exports.updateBook = async (req, res) => {
  const {
    bookAuthor,
    bookTitle,
    bookIsbn,
    bookPrice,
    bookCategory1,
    bookCategory2,
  } = req.body;

  try {
    await BookModel.updateOne(
      { isbn: bookIsbn },
      {
        author: bookAuthor,
        book: bookTitle,
        isbn: bookIsbn,
        price: bookPrice,
        categories: [bookCategory1, bookCategory2],
      }
    );
    const updatedBook = await BookModel.find({ isbn: bookIsbn });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  const { bookIsbn } = req.body;
  try {
    const deletedBook = await BookModel.deleteOne({ isbn: bookIsbn });
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getBooksById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteBookById = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
