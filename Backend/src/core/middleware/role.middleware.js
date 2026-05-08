//src/core/middleware/role.middleware.js 
import ForbiddenError from '../errors/ForbiddenError.js';

const roleMiddleware = (...roles) => {
    return (req, res, next) => {
       if (!req.user || !roles.includes(req.user.role)) {
            return next(new ForbiddenError('You do not have permission to access this resource'));
        }
        next();
    };
};

export default roleMiddleware;

