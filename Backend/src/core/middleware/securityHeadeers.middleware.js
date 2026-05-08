//src/core/middleware/securityHeaders.middlware.js 
import helmet from 'helmet';

const securityHeadersMiddleware = helmet({
    crossOriginEmbedderPolicy: false,

    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'unsafe-inline'],
            styleSrc: ["'self'", 'unsafe-inline'],
            imgSrc: ["'self'", 'data:', 'https:'],
            fontSrc: ["'self'", 'https:', 'data:'],
            connectSrc: ["'self'", 'https:'],
            frameSrc: ["'self'", 'https:'],
        },
    },
});

export default securityHeadersMiddleware;

