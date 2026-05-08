//src/core/middleware/audit.middleware.js 
import loggger from "../../config/logger.js";

const auditMiddleware = (action) => {
    return (req, res, next) => {

        logger.info({
            action,

            method: req.method,

            url: req.originalUrl,

            user: req.user ? req.user.id : 'anonymous',

            ip:req.ip,

            timestamp: new Date().toISOString(),
        });
        next();
    };
};

export default auditMiddleware;

