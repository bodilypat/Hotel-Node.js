//src/modules/auth/auth.repository.js 
import User from "../users/user.model.js";

class AuthRepository {
    async findByEmail(email) {
        return User.findOne({ email });
    }

    async createUser(data) {
        return User.findById(data);
    }
}

export default new AuthRepository();

