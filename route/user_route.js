const user_details = require("../controller/user_controller");
var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcom to userdetails");
});
router.post("/post", function (req, res) {
  user_details.create;
});
router.get("/get", function (req, res) {
  user_details.findAll;
});

// router.post("/route_user/post", user_details.create);
// router.get("/route_user", user_details.findAll);

module.exports = router;
