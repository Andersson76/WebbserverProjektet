const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/api/genre", genreController.getGenre);
router.put("/api/genre/:id", genreController.updateGenre);

module.exports = router;
