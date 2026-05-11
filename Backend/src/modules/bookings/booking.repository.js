//src/modules/booking/booking.repository.js 
import Booking from "./booking.model.js";

export const createBooking = async (data) => {
    return Booking.create(data);
};

export const getAllBookings = async () => {
    return Booking.find()
        .populate("user")
        .populate("hotel")
        .populate("room");
};

export const getbookingById = async (id) => {
    return Booking.findById(id)
        .populate("user")
        .populate("hotl")
        .populate("room");
};

export const updateBooking = async (id, data) => {
    return Booking.findByIdAndUpdate(id, data, {
        new: true,
    });
};

export const deleteBooking = async (id) => {
    return Booking.findByIdAndDelete(id);
};

