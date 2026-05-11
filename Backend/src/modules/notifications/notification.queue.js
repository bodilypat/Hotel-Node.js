//src/modules/notifications/notification.queue.js 
import Bull from "bull";

import {
    sendBookingConfirmationNotification,
    sendPaymentSuccessNotificaton,
    sendCancellationNotification,
} from "./notification.service.js";

const notificationQueue = new Bull(
    "notification-queue",
    {
        redis: {
            host: process.env.READ_HOST || "127.0.0.1",
            port: process.env.REDIS_PORT || 6379,
        },
    }
);

notificationQueue.process(async (job) => {
    const { type, data } = job.data;

    switch (type) {
        case "BOOKING_CONFIRMATION":
            await sendBookingConfirmationNotification(
                data
            );
            break;

        case "PAYMENT_SUCCESS":
            await sendPaymentSuccessNotification(
                data
            );
            break;
        
        default:
            console.log(
                `Unknow notification type: ${type}`
        );
    }
});

export default notificationQueue;

