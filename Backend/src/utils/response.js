//src/core/utils/response.js
const successReponse = ({
    res,
    statusCode ="Success",
    data = null,
    meta = {},
}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        meta,
    });
}

const errorResponse = ({
    res,
    statusCode = 500,
    message = "Internal Server Error",
    errors = [],
}) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};

export default {
    successResponse,
    errorResponse,
};

