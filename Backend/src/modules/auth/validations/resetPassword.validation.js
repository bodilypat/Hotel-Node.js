//src/modules/auth/validations/resetPassword.validation.js 
const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.object({
        email: Joi.string()
            .email()
            .required(),

        password: Joi.string()
            .min(6)
            .required(),

        confirmPassword: Joi.string()
            .valid(Joi.ref('password'))
            .required(),
    }),
});

