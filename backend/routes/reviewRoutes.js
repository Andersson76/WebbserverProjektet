const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/api/reviews", reviewController.getReview);
router.get("/api/reviews/:id", reviewController.getReview);
router.post("/api/reviews", reviewController.createReview);
router.put("/api/reviews/:id", reviewController.updateReview);
router.delete("/api/reviews", reviewController.deleteReview);
router.delete("/api/reviews/:id", reviewController.deleteReview);

module.exports = router;
