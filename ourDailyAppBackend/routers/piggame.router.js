const express = require("express");
const piggameController = require("../controllers/piggame/piggame.controller");
const authController = require("../controllers/auth/auth.controller");

const router = express.Router();

router.route("/").get(authController.protect, piggameController.loadGameState)
.patch(authController.protect, piggameController.updateEntireGameState);

router.route("/:game_Id/player2LogIn").post(piggameController.logInPlayer2);

module.exports = router;