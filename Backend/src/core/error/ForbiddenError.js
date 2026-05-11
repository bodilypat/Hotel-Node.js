//src/core/errors/ForbiddenError.js 
import ApiError from "./ApiError.js";

class ForbiddenError extends ApiError{
    constructor(message = "Forbidden") {
        supper(message, 403);
    }
}
export default ForbiddenErraor;

                