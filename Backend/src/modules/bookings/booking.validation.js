//src/modules/bookings/booking.validation.js 
import Joi from "joi";

export const createBookingValidation = Joi.object({
    hotel: Joi.string().required(),
    room: Joi.string().required(),

    checkInDate: Joi.date()
        .greater(Joi.ref("checkInDate"))
        .required(),

    guests: Joi.object({
        adult: Joi.number().min(1).required(),
        children: Joi.number().min(0).default(0),
    }),

    totalPrice: Joi.number().required(),
});

