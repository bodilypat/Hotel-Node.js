//src/modules/auth/services/token.service.js 
const jwt = require('jsonwebtoken');

class TokenService {
    generateAccessToken(payload) {
        return jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expireIn:
                    process.env.JWT_EXPIRES_IN || '1d',
            }
        );
    }

    verifyAccessToken(token) {
        return jwt.verify(
            token,
            process.env.JWT_SECRET
        );
    }
}

module.exports = new TokenService();

