const Joi = require("joi");

const schema = {
  create_user_details: Joi.object({
    user: Joi.string().min(6).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
    mobile: Joi.number().min(10).required(),
  }),
  get_one_user_details: Joi.object({
    user: Joi.string().min(6).required(),
  }),
  update_user_password_details: Joi.object({
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
    mobile: Joi.number().min(10),
  })
};

module.exports = schema;
