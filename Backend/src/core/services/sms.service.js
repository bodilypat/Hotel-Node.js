//src/core/services/sms.service.js 
import twilio from 'twilio';
import logger from '../../config/logger.js';

class SmsService {
    constructor() {
        this.client = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );

        this.from = process.env.TWILIO_PHONE_NUMBER;
    }

    /*
    * Send generic SMS
    * @param {Object} options 
    * @param {string} options.to 
    * @param {string} options.body
    */
    async sendSMS({ to, body }) {
        try {
            const message = await this.client.messages.create({
                body,
                from: this.from,
                to,
            });

            logger.info(`SMS sent successfully: ${message.sid}`);

            return {
                success: true,
                sid: message.sid,
                status: message.status,
            };
        } catch (error) {
            logger.error(`SMS sending failed: ${error.message}`);

            throw new Error('Failed to send SMS');
        }
    }

    /* 
    * Send booking confirmation SMS
    * @param {Object} user 
    * @param {Object} booking 
    */
    async sendBookingConfirmation(user, booking) {
        return this.sendSMS({
            to: user.phone,
            body: `
                Booking ID: ${booking.id}
                Hotel: ${booking.hotelName}
                Room: ${booking.roomNumber}
                Check-In: ${booking.checkInDate}
                Check-Out: ${booking.checkOutDate}

                Thank you for choosing us.
            `.trim(),
        });
    }

    /* 
    * Send booking reminder SMS 
    * @param {Object} user 
    * @param {Object} booking 
    */
    async sendBookingRemainder(user, booking) {
        return this.sendSMS({
            to: user.phone,
            body: `
                Reminder: Your stay at ${booking.hotelName}
                starts on ${booking.checkInDate}.

                Booking ID: ${booking.id}

                We look forward to hosting you.
            `.trim(),
        });
    }

    /* 
    * Send OTP SMS
    * @param {string} phone 
    * @param {string|number} otp
    */
    async sendOTP(phone, otp) {
        return this.sendSMS({
            to: phone,
            body: `Your verification OTP is: ${otp}`,
        });
    }

    /* 
    * Send password reset SMS 
    * @param {string} phone 
    * @param {string} resetCode 
    */
    async sendPasswordReset(phone, resetCode) {
        return this.sendSMS({
            to: phone,
            body: `Your password reset code is: ${resetCode}`,
        });
    }

    /* 
    * Verify Twilio connection
    */
    async verifyConnection() {
        try {
            const account = await this.client.api.accounts(
                process.env.TWILIO_ACCOUNT_SID
            ).fetch();

            logger.info(`Twilio connected: ${account.friendlyName}`);

            return true;
        } catch (error) {
            logger.error(`Twilio connection failed: ${error.message}`);

            return false;
            }
        }
}

export default new SmsService();