//src/core/middlware/rateLimit.middleware.js 
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 100,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
        success: false,
        message: 'Too many requests',
        },
    });

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 5,

    message: {
        success: false,
        message: 'Too many login attempts',
    },
    standardHeaders: true,
    legacyHeaders: false,
    });

export const passwordResetLimiter = rateLimit({ 
    windowMs: 15 * 60 * 1000,

    max: 5,

    message: {
        success: false,
        message: 'Too many password reset attempts', 
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export const generalLimiter = rateLimit({
    windowMs: 60 * 1000,

    max: 200,

    message: {
        success: false,
        message: 'Too many requests, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});


