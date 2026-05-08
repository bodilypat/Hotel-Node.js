//src/core/middleware/error.middleware.js 
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',

        ...(process.env.NODE_ENV === 'development' && { 
            stack: err.stack,
            error: err,
        }),
    });
};

export default errorMiddleware;

