//src/config/redis.js 
import Redis from 'ioredis';
import env from './env.js';
import logger from '../utils/logger.js';

const redis = new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: true,
});

redis.on('connect', () => {
    logger.info('Connected to Redis');
});

redis.on('error', (err) => {
    logger.error(`Redis error: ${err}`);
});

export default redis;

