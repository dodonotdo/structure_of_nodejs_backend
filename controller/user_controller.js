const user_details_table = require("../models/user_table");

const userRoot = (req, res) => res.send("welcome to user details");

const create = (req, res) => {

  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    mobile_no: req.body.mobile_no,
  };

  user_details_table.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
    
};

const findAll = (req, res) => {
  user_details_table.findAll()
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
