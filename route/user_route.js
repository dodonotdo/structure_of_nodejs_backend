const user_details = require("../controller/user_controller");

const express = require("express");

const router = express.Router();

router.get("/", user_details.userRoot);

router.post("/post", user_details.create);

router.get("/get", user_details.findAll);

module.exports = router;
