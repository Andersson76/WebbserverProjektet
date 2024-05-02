const express = require("express");
const router = express.Router();
const mainActorController = require("../controllers/mainActorController");

router.get("/api/mainActor", mainActorController.getmainActor);
/*router.get("/api/mainActor/:id", mainActorController.getmainActor);
router.post("/api/movies", mainActorController.getmainActor);
router.put("/api/movies/:id", mainActorController.getmainActor);
router.delete("/api/movies/:id", mainActorController.getmainActor);
router.get("/api/movies/genre", mainActorController.getmainActor);
*/

module.exports = router;
