const express = require("express");
const ControllerUser = require("../controller/user");
const router = express.Router();

router.post("/login", ControllerUser.loginUser);
router.post("/register", ControllerUser.createUser);

module.exports = router;
