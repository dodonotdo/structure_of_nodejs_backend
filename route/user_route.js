const user_details = require("../controller/user_controller");

const express = require("express");

const router = express.Router();

router.get("/", user_details.userRoot);

router.post("/create", user_details.create_user_details);

router.get("/get", user_details.get_user_details);

router.post("/getOne", user_details.get_one_user_details);

module.exports = router;


