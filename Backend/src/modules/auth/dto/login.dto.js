//src/modules/auth/dto/login.dto.js 
class LoginDTO {
    constructor(data = {}) {
        this.email = data.email;
        this.password = data.password;
    }

    toJSON() {
        return {
            email: this.email,
        };
    }
}

module.exports = LoginDTO;

