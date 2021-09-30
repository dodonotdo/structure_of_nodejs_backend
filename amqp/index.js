const user_details_table = require("../models/user_details_table");
var amqp = require('amqplib/callback_api');
const cleanObject = require("../library/cleanObject");

const userRoot = (req, res) => res.send("user details api root");

const create_user_details = (req, res) => {
  async function produce() {
    amqp.connect("amqp://localhost", (err, connection) => {
      if (err) {
        throw err;
      }
      connection.createChannel((error, channel) => {
        if (error) {
          throw error;
        }
        var queue = "hello";
        var msg = JSON.stringify(req.body)

        channel.assertQueue(queue, {
          durable: false,
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
      });
    });
  }
  produce();

  let user = res.locals.data;
  let create_users = user_details_table.create(user);
  create_users
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the users.",
      });
    });
};

const get_user_details = async (req, res) => {
  await user_details_table
    .findAll()
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
  let user = res.locals.data.user;
  let user_details = user_details_table.findOne({
    where: { user: user },
  });

  user_details
    .then((result) => res.send(result))
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const update_user_password_details = (req, res) => {
  const update_details = {
    password: req.body.password,
    mobile: req.body.mobile,
    email: req.body.email,
  };

  let update_password = user_details_table.update(cleanObject(update_details), {
    where: { user: req.body.user },
  });

  update_password
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

module.exports = {
  userRoot,
  create_user_details,
  get_user_details,
  get_one_user_details,
  update_user_password_details,
};
