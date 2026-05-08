//src/core/middleware/permission.middleware.js 
import ForbiddenError from '../errors/ForbiddenError.js';

const permissionMiddleware = (...permissions) => {
    return (req, res, next) => {

        const userPermissions = req.user.permissions || [];

        const hasPermission = permissions.every((permission) =>
            userPermissions.includes(permission)
        );

        if (!hasPermission) {
            return next(new ForbiddenError('You do not have permission to access this resource'));
        }

        next();
    };
};

export default permissionMiddleware;


