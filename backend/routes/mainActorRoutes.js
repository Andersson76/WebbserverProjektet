const express = require("express");
const router = express.Router();
const mainActorController = require("../controllers/mainActorController");

router.get("/api/mainActor", mainActorController.getmainActor);
router.get("/api/mainActor/:id", mainActorController.getmainActor);
router.post("/api/mainActor", mainActorController.createmainActor);
router.put("/api/mainActor/:id", mainActorController.updatemainActor);


module.exports = router;
