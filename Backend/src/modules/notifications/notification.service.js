//src/modules/notifications/notification.service.js 
import { sendEmail } from "../../core/services/email.service.js";
import { sendSMS } from "../../core/services/sms.service.js"

export const sendBookingConfirmationNotification = async ({
    user,
    booking,
}) => {
    const subjct = "Booking Confirmation";

    const html = `
        <h2>Booking Confirme</h2>
        <p>Hello ${user.name},</p>
        
        <p>Your booking has been confirmed successfully.</p>
        
        <ul>
            <li>Booking ID: ${booking._id}</li>
            <li>Check-In: ${booking.checkInDate}</li>
            <li>Check-Out: ${booking.checkOutDate}</li>
        </ul>
        
        <p>Thank you for choosing us.</p>
        `;

    await sendEmail({
            to: user.email,
            subject,
            html,
    });

    if (user.phone) {
        await sendSMS({
            to: user.phone,
            message: "Your hotel booking has been confimed successfully.",
        });
    }
};

export const sendPaymentSuccessNotification = async ({
    user,
    payment,
}) => {
    const subject = "Payment Successful";

    const html = `
        <h2>Payment Successful</h2>
        
        <p>Hello ${user.name},</p>
        
        <p>Your payment was completed successfully.</p>
        
        <ul>
            <li>Transaction ID: ${payment.transactionId}</li>
            <li>Amount: $${payment.amount}</li>
        </ul>
    `;

    await sendEmail({
        to: user.email,
        subject,
        html,
    });
};

export const sendCancellationNotification = 
    async ({
        user,
        booking,
    }) => {
        const subject = "Booking Cancelled";

        const html = `
            <h2>Booking Cancelled</h2>
            
            <p>Hello ${user.name},</p>
            
            <p>Your booking has been cancelled.</p>
            
            <p>Booking ID: ${booking._id}</p>
        `;

        await sendEmail({
            to: user.email,
            subject,
            html,
        });
};




