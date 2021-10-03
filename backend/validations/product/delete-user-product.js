const Joi = require("joi");

module.exports = Joi.object({
  user_product_id: Joi.string().required().label("product_id"),
});
