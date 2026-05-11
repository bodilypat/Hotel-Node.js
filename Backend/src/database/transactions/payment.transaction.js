//src/database/transactions/payment.transaction.js 
import mongoose from "mongoose";

import Payment from "../../modules/payments/payment.model.js";
import Booking from "../../bookings/booking.model.js";

export const completePaymentTransaction = 
    async ({
        paymentData,
        bookingId,
    }) => {
        const session = 
            await mongoose.startSession(); 

        session.startTransaction();

        try {
            const payment = 
                await Payment.create(
                    [paymentData],
                    { session }
                );
            
            await Booking.findByIdAndUpdate(
                bookingId,
                {
                    paymentStatus: "paid",
                },
                { session }
            );

            await session.comitTransaction();

            session.endSession();

            return payment;
        } catch (error) {
            await session.abortTransaction();

            session.endSession();

            throw error;
        }
    };

    