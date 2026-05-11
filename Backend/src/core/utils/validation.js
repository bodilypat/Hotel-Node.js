//src/core/utils/validation.js 
import Joi from "joi";

const validate = (schema, data) => {
    const { error, value} = schema.validate(data, {
        abortEarly: false,
        stripUnknow: true,
    });

    if (error) {
        return {
            invalid: false,
            errors: error.details.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            })),
        };
    }

    return {
        isValid: true,
        value,
    };
};

module.exports = validate;


