//src/modules/bookings/booking_model.js 
import mongoose from "mongoose";
import { BOOKING_STATUS, PAYMENT_STATUS } from "./booking.constants.js";

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },

        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required: true,
        },

        checkInDate: {
            type: Date,
            required: true,
        },

        checkOutDate: {
            type: Date,
            required: true,
        },

        guests: {
            adults: {
                type: Number,
                default: 1,
            },

            chilren: {
                type: Number,
                default: 0,
            },
        },

        totalPrice: {
            type: String,
            enum: Object.values(PAYMENT_STATUS),
            default: PAYMENT_STATUS.PENDING,
        },

        bookingStatus: {
            type: String,
            enum: Object.values(BOOKING_STATUS),
            default: BOOKING_STATUS.PENDING,
        },

        bookingStatus: {
            type: String,
            enum: Object.values(BOOKING_STATUS),
            default: BOOKING_STATUS.PENDING,
        },
    },
    {
        timestamps: true,
    }
);

export defalt mongoose.model("Booking", bookingSchema);

