//src/core/errors/ApiError.js 
class ApiError extends Error {
    constructor(
        message= "Internal Server Error",
        statusCode = 500,
        errors = [],
    ) {
        supper(message);

        this.name = this.constructor.name;

        this.statusCode = statusCode;

        this.success = false;

        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ApiError;
