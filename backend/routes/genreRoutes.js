const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/api/genre", genreController.getGenre);
router.get("/api/genre/:id", genreController.getGenre);
router.post("/api/genre", genreController.createGenre);
router.put("/api/genre/:id", genreController.updateGenre);

module.exports = router;
