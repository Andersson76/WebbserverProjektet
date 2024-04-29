const express = require("express");
const router = express.Router();
const writerController = require("../controllers/writerController");

router.get("/api/writers", writerController.getWriters);
router.get("/api/writers/:id", writerController.getWriter);
router.post("/api/writers", writerController.createWriter);
router.put("/api/writers/:id", writerController.updateWriter);

module.exports = router;
