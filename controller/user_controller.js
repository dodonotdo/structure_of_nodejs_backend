const user_details_table = require("../models/user_details_table");

const userRoot = (req, res) => res.send("welcome to user details");

const create_user_details = (req, res) => {

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

const get_user_details = (req, res) => {
  
  user_details_table.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const get_one_user_details = (req, res) => {
  
  user_details_table.findOne({ where: {username: req.body.username}})
    .then((result) => {
      res.send(result);
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
  create_user_details,
  get_user_details,
  get_one_user_details,
};
