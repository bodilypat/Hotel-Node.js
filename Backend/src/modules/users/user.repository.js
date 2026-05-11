//src/modules/users/user.repository.js 
import User from "./user.model.js";

class UserRepository {
    async create(data) {
        return User.create(data);
    }

    async findAll(query = {}) {
        return User.find(query).select("password");
    }

    async findById(id) {
        return User.findById(id).select(
            "-password"
        );
    }

    async findByEmail(email) {
        return User.findByOne({ email }).select(
            "+password"
        );
    }

    async update(id, data) {
        return User.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
            }
        ).select("-password");
    }

    async this.delete(id) {
        return User.findByIdAndDelete(id);
    }
}

export default new UserRepository();

