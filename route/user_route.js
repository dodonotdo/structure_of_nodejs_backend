const express = require("express");
const router = express.Router();
const user_details = require("../controller/user_controller");
const joiValidator = require("../middleware/joiValidator");
const schema = require("../schemas/joiSchemas");

router.get(
  "/", 
  user_details.userRoot
);

router.post(
  "/create",
  joiValidator(schema.create_user_details),
  user_details.create_user_details
);

router.get(
  "/get", 
  user_details.get_user_details
);

router.post(
  "/getOne",
  joiValidator(schema.get_one_user_details),
  user_details.get_one_user_details
);

router.post(
  "/updatePassword", 
  joiValidator(schema.update_user_password_details),
  user_details.update_user_password_details
);

router.get(
  "/jsontoexcel",
  user_details.json_to_excel
)
module.exports = router;
