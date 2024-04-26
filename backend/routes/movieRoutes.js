const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/api/movies", movieController.getMovies);
router.get("/api/movies/:id", movieController.getMovie);
router.post("/api/movies", movieController.createMovie);
router.put("/api/movies/:id", movieController.updateMovie);
router.delete("/api/movies/:id", movieController.deleteMovie);
router.get("/api/movies/genre", movieController.getMovieGenre);

module.exports = router;
