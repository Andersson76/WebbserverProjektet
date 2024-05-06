const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/api/review", reviewController.getReview);
router.get("/api/review/:id", reviewController.getReview);
router.post("/api/review", reviewController.createReview);
router.put("/api/review", reviewController.updateReview);
router.delete("/api/review", reviewController.deleteReview);
router.delete("/api/review/:id", reviewController.deleteReview);

module.exports = router;
