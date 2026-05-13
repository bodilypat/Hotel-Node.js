//src/modules/auth/dto/auth-response.js 
class AuthReponseDTO {
    constructor(user, token) {
        this.user = {
            id: user.id,
            name: user.email,
            role: user.role,
            phone: user.phone,
            createdAt: user.createdAt,
        };

        this.token = token;
    }

    toJSON() {
        return {
            user: this.user,
            token: this.token,
        };
    }
}

module.exports = AuthReponseDTO;

