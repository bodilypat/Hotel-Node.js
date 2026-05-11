//src/core/security/tokenBacklist.js 
import redisClient from "../../config/redit.js";

class TokenBlacklistService {
    async blacklistToken(token, expiresIn = 900) {
        const key = `blacklist: ${token}`;

        await redisClient.set(key, "blacklisted", "EX", expiresIn);
    }

    async isBlacklisted(token) {
        const result = await redisClient.get(
            `blacklist: ${token}`
        );

        return !!result;
    }
}

export default new TokenBlacklistService();
