const express = require("express");
const router = express.Router();
const directorController = require("../controllers/directorController");

router.get("/api/directors", directorController.getDirectors);
router.get("/api/directors/:id", directorController.getDirector);
router.post("/api/directors", directorController.createDirector);
router.put("/api/directors/:id", directorController.updateDirector);

module.exports = router;
