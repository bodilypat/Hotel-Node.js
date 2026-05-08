//src/core/middleware/csrf.middleware.js 
import csrf from 'csurf';

const csrfProtection = csrf({ 
        cookie: true,
    });

export default csrfProtection;

