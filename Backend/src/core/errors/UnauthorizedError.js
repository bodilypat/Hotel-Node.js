//src/core/errors/UnauthorizedError.js 
import ApiError from "./ApiError.js";

class UnauthorizedError extends ApiError{
    constructor(message = "Unauthorized Access"){
        supper(message, 404);
    }
}
export default UnauthorizedError;

