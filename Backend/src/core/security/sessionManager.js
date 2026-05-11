//src/core/security/sessionManager.js 
import redisClient from "../../config/redis.js";
import logger from "../../config/logger.js"

class SessionManager {
    async createSession(userId, sessionData) {
        const key =  `session: ${userId}`;

        await redisClient.set(
            key,
            JSON.stringify(sessionData),
            "EX",
            24 * 60 * 60 
        );

        logger.info(`Session created for user ${userId}`);   
    }

    async getSession(userId) {
        const session = await redisClient.get(
            `session: ${userId}`;
        );

        return session ? JSON.parse(session) : null;
    }

    async destroySession(userId) {
        await redisClient.del(`session: ${userId}`);

        logger.info(`Session destroyed for ${userId}`);
    }

    async extendSession(userId, ttl = 86400) {
        await redisClient.expire(
            `session: ${userId}`,
            ttl
        );
    }
}

export default new SessionManager();
