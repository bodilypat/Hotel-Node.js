//src/core/services/email.service.js 
import nodemailer from "nodemailer";
import env from "../../config/ev.js";
import logger from from "../../config/logger.js";

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.SMTP_HOST,
            port: env.SMTP_PORT,
            secure: false,
            auth: {
                user: env.SMTP_USER,
                pass: env.STMT_PASS,
            },
        });
    }

    async sendMail({ to, subject, html, text }) {
        try {
            const info = await this.transporter.sendMail({
                from: env.SMTP_FROM,
                to,
                subject,
                html,
                text,
            });

            logger.info(`Email sent to ${to}`);
            return info;
        } catch (error) {
            logger.error("Email sending failed", error);
            throw error;
        }
    }
}

export default new EmailService();
