//src/modules/auth/otd/register.dto.js 
class RegisterDTO {
    constructor(data = {}) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone || null;
        this.role = data.role || 'PATIENT';
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            role: this.role,
        };
    }
}

module.exports = RegisterDTO;

