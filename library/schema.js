const Joi = require("joi");

const schema = {
  create_user_details: Joi.object({
    user: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    mobile_no: Joi.number().min(10).required(),
  }),
};
module.exports = {
  schema,
};
