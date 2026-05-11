//src/database/transactions/booking.transaction.js 
import mongoose from "mongoose";

import Booking from "../../modules/booking/booking.model.js";
import Room from "../../modules/rooms/room.model.js";

export const createBookingTransaction = 
    async ({
        bookingData,
        roomId,
    }) => {
        const session = 
            await mongoose.startSession();

        session.startTransaction();

        try {
            const booking = 
                await Booking.create(
                    {bookingData},
                    { session }
                );
            
            await Room.findByIdAndUpdate(
                roomId,
                {
                    isAvailable: false,
                },
                { session }
            );

            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();

            session.endSession();

            throw error;
        }
    };

    