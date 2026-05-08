//src/core/middlware/validate.middelware.js 
const validateMiddleware = (schema) => {
    return (req, res, next) => {
        const data = {
            body: req.body,
            params: req.params,
            query: req.query,
        };

        const { error } = schema.validate(data, {  
                abortEarly: false,
                allowUnknown: true,
                stripUnknown: true,
            });

        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.details.map((detail) => detail.message),
            });
        }
        
        next();
    }
};

export default validateMiddleware;


    
        
