//src/modules/aut/validations/register.validation.js 
const Joi = require('joi');

module.exports = Joi.object({
    body: Joi.object({
        name: Joi.string()
            .min()
            .require(),

        email: Joi.string()
            .email()
            .required(),

        password: Joi.string()
            .min(6)
            .required(),
        
        phone: Joi.string()
            .min(10)
            .max(15)
            .optional(),
    }),
});

