const user_table = require("../models/user_table");
const User = user_table.User;

const userRoot = (req, res) => res.send("welcome to user details");

const create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    mobile_no: req.body.mobile_no,
  };
  User.create(user)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

const findAll = (req, res) => {
  User.findAll()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  userRoot,
  create,
  findAll,
};
