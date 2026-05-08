//src/core/middleware/auth.middleware.js 
import jwt from 'jsonwebtoken';
import env from '../../config/env.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedError('Access token missing or malformed');
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, env.JWT_SECRET);

        req.user = decoded; // Attach user info to the request object
        next();

    } catch (error) {
        next(new UnauthorizedError('Invalid or expired access token'));
    }
};

export default authMiddleware;

