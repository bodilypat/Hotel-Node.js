//src/modules/booking/booking.scheduler.js
import cron from "none-cron";
import Booking from "./booking.model.js";
import { BOOKING_STATUS } from "./booking.constants.js";

cron.schedule(") * * * *", async() => {
    console.log("Running expired booking scheduler...");

    const now =  new Date();

    await Booking.updateMany(
        {
            checkIdDate: { $lt: now},
            bookingStatus: BOOKING_STATUS.PENDING,
        },
        {
            bookingStatus: BOOKING_STATUS.CANCELLED,
        }
    );

    console.log("Expired booking updated.");
});
