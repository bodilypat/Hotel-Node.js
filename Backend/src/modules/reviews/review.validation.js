//src/modules/reviews/review.validation.js
import Joi from "joi";

export const createReviewValidation = Joi.object({
    hotel: Joi.string().required(),

    booking: Joi.string().optional(),

    rating: Joi.number()
        .min(1)
        .max(5)
        .required(),

    comment: Joi.string() 
        .max(1000)
        .allow("")
        .optional()
});

