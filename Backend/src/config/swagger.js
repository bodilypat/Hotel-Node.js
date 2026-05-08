//src/config/swagger.js 
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import env from './env.js';

const options = {
    definition: {
        openapi: '3.0.0',

        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'A simple Express API application documented with Swagger',
        },

        servers: [
            {
                url: `http://localhost:${env.PORT}/api/v1/`,
                description: 'Development server',
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },                
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
const setupSwagger = (app) => {
    if (env.ENABLE_SWAGGER) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
};

export default setupSwagger;

