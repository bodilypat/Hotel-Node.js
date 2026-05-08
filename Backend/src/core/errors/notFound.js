//src/core/errors/notFound.js 
import  { ApiError } from "./apiError.js";

export const notFound = (req, res, next) => {
    next(
        new ApiError(
            404,
            `Can't find ${req.originalUrl} on this server!`
        )
    );
};

