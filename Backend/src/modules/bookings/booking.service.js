//src/modules/bookings/booking.service.js 
import * as bookingRepository from "./booking.repository.js";
import { BOOKING_STATUS } from "./booking.constants.js";

export const createBookingService = async (payload, userId) => {
    const booking = await bookingRepository.createBooking({
        ...payload,
        user: userId,
        bookingStatus: BOOKING_STATUS.CONFIRMED,
    });

    return booking;
};

export const getBookingService = async () => {
    return bookingRepository.getAllBookings();
};

export const getBookingService = async (id) => {
    return bookingRepository.getbookingById(id);
};

export const cancelBookingService = async (id) => {
    return bookingRepository.updateBooking(id, {
        bookingStatus: BOOKING_STATUS.CANCELLED,
    });
};

