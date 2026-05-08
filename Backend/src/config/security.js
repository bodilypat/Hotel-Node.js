//src/config/security.js 
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';
import env from './env.js';

export const securityMiddleware = (app) => {
    app.use(
        helmet({
            contentSecurityPolicy: false,
        })
    );

    app.use(
        cors({
            origin: env.CLIENT_URL,
            credentials: true,
        })
    );

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
            message: 'Too many requests from this IP, please try again later.',
        })
    );

    app.use(mongoSanitize());
    app.use(xss());
    app.use(hpp());
};


