//src/core/middleware/sanitize.middleware.js 
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';

const sanitizeMiddleware = (app) => {
    app.use(mongoSanitize());

    app.use(xss());

    app.use(hpp());

};
export default sanitizeMiddleware;

