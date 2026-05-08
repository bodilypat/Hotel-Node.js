//src/core/errors/errorHandler.js 
import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    /* Default error */
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let errors = err.errors || [];

    /* Handle Zod validation errors */
    if (err instanceof ZodError) {
        statusCode = 400;

        message = "Validation failed";
        errors = err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));
    }

    /* Prisma Error */
    if (err.code === "P2002") {
        statusCode = 409;
        message = "Duplicate field value";
        errors = err.meta?.target || [];
    }

    if (err.code === "P2025") {
        statusCode = 404;

        message = "Record not found";
        errors = err.meta?.cause || [];
    }

    /* JWT Error  */
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid token";
    }

    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token expired";
    }

    /* Multer Error */
    if (err.name === "MulterError") {
        statusCode = 400;
        message = err.message;
    }

    /* Final Response */
    res.status(statusCode).json({
        success: false,
        message,
        errors,
        stack: 
            process.env.NODE_ENV === "production" 
            ? undefined 
            : err.stack,
    });
};

