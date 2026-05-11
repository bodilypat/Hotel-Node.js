//src/core/security/jwt.js
import jwt from "jsonwebtoken";
import env from "../../config/env.js";

class JWTService {
    generateAccessToken(payload) {
        return jwt.sign(payload, env.JWT_SECRET, {
            expiresIn: env.JWT_EXPIRES_IN || "15m",
        });
    }

    verifyAccessToken(token) {
        return jwt.verify(token, env.JWT_SECRET);
    }

    decodeToken(token) {
        return jwt.decode(token);
    }
}

export default new JWTService();

