//src/config/env.js 
import dotenv from 'dotenv';
import { cleanEnv, str, num, bool } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
    NODE_ENV: str({ 
        choices: ['development', 'production', 'test'],
        default: 'development',
    }),

    PORT: num({ default: 3000 }),

    MONGO_URI: str(),

    JWT_SECRET: str(),
    JWT_REFRESH_SECRET: str(),

    JWT_EXPIRES_IN: num({ default: 3600 }), // 1 hour
    JWT_REFRESH_EXPIRES_IN: num({ default: 604800 }), // 7 days

    REDIS_URL: str(),

    CLOUDINARY_CLOUD_NAME: str(),
    CLOUDINARY_API_KEY: str(),
    CLOUDINARY_API_SECRET: str(),

    CLIENT_URL: str(),

    LOG_LEVEL: str({ 
        choices: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],
        default: 'info',
    }),

    BCRYPT_SALT_ROUNDS: num({ default: 12 }),

    ENABLE_SWAGGER: bool({ default: true }),
});

export default env;



