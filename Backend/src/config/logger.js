//src/config/logger.js 
import winston from 'winston';
import path from 'path';

const logDir = path.join(process.cwd(), 'logs');

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',

    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${
                stack || message}`;
        })
    ),

    transports: [
        new winston.transports.File({ 
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            maxsize: 5 * 1024 * 1024, // 5MB
            maxFiles: 5,
            tailable: true,
        }),

        new winston.transports.File({ 
            filename: path.join(logDir, 'combined.log'),
            maxsize: 10 * 1024 * 1024, // 10MB  
            maxFiles: 10,
            tailable: true,
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(({ timestamp, level, message, stack }) => {
                return `${timestamp} [${level}]: ${stack || message}`;
            })
        ),
    }));
}

export default logger;

