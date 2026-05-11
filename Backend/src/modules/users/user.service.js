//src/modules/users/user.service.js 
import bcrypt from "bcrypt";

import userRepository from "./user.repository.js";

import ApiError from "../../core/error/ApiError";

import {
    USER_MANAGER,
    USER_MESSAGES,
} from "./user.constants.js";

class UserService {
    async createUser(data) {
        const existingUser = 
            await userRepository.findByEmail(
                data.email
            );

        if (existingUser) {
            throw new ApiError(
                "Email already exists",
                409
            );
        }

        const hashedPassword = 
            await bcrypt.hash(data.password, 10);

            return userRepository.create({
                ...data,
                password: hashedPassword,
            });
        }

        async getUsers() {
            return userRepository.findAll();
        }

        async getUserById(id) {
            const user = 
                await userRepository.findById(id);

                if (!user) {
                    throw new ApiError(
                        USER_MESSAGES.USER_NOT_FOUND,
                        404
                    );
                }
            return user;
        }
        async updateUser(id, data) {
            const user = 
                await userRepository.update(id, data);

                if (!user) {
                    throw new ApiError(
                        USER_MESSAGES.USER_NOT_FOUND,
                    );
                }

            return true;
        }
}

export default new UserService();