const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/api/movies", movieController.getMovies);
router.get("/api/movies/:id", movieController.getMovie);
/* router.post("/api/books", bookController.createBook);
router.put("/api/books", bookController.updateBook);
router.delete("/api/books", bookController.deleteBook);
router.get("/api/books-categories", bookController.getBooksCategories); */

module.exports = router;
