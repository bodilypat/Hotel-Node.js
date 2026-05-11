//src/modlues/bookings/booking.controller.js 
import * as bookingService from "./booking.service.js";

export const createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBookingService(
            req.body,
            req.user.id
        );

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking,
        });
    } catch (error) {
        next(error)
    }
};

export const getBookings = async (req, res, next) => {
    try {
        const booking = await bookingService.getBookingService();

        res.status(200).json({
            success: true,
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};

export const getBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.getBookingService(req.params.id);

        res.status(200).json({
            success: true,
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};

export const cancelBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.cancelBookingService(req.params.id);

        res.status(200).json({
            success: true,
            message: "Booking cancelled successfully",
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};

