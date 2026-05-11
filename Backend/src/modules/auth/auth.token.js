//src/modules/auth/auth.token.js 
import jwtService from "../../core/security/jwt.js";
import refreshTokenService from "../../core/security/refreshToken.js";

class AuthToken {
    generateTokens(payload) {
        const accessToken = 
            jwtService.generateAccessToken(
                payload
            );
        return {
            accessToken,
            refreshToken,
        };
    }
}

export default new AuthToken();

