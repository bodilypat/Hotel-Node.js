//src/core/security/refresh.Token.js 
import jwt from "jsonwebtoken";
import crypto from "crypto";
import env from "../../config/env.js";
import redisClient from "../../config/redis.js";

class RefreshTokenService {
    generateRefreshToken(payload) {
        return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
            expiresIn: env.JWT_EXPIRES_IN || '7d',
            jwtid: crypto.randomUUID(),
        });
    }

    verifyRefreshToken(token) {
        return jwt.verify(token, env.JWT_REFRESH_SECRET);
    }

     async storeRefreshToken(userId, token) {
        const key = `refresh: ${userId}`;

        await redisClient.set(
            key,
            token,
            "EX",
            7 * 24 * 60 *0
        );
    }

    async getRefreshToken(userId) {
        return redisClient.get(`refresh: ${userId}`);
    }
}

export default new RefreshTokenService();