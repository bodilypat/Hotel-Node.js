//src/modules/auth/validations/login.validation.js 
const Joi = require('joi');

module.exports = Joi.object({
    body: Joi.object({
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .min(6)
          .required(),
    }),
});

