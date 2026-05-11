//src/modules/auth/auth.service.js 
import bcrypt from "bcrypt";

import authRepository from "./auth.repository.js";
import authToken from "./auth.token.js";
import authEvent from "./auth.events.js";

import { AUTH_MESSAGES } from "./auth.constants.js";

import ApiError from "../../core/error/ApiError.js"

class AuthService {
    async register(data) {
        const existingUser = 
            await authRepository.findByEmail(
                data.email
        );

        if (existingUser) {
            throw new ApiError(
                AUTH_MESSAGES.USER_ALREADY_EXISTS,
                409
            );
        }

        const hashPassword = 
            await bcrypt.hash(data.password, 10);

            const user = 
                await authRepository.createUser({
                    ...data,
                    password: hashedPassword,
                });
            
            authEvents.emit("user.registered", user);

            return user;
    }

    async login(email, password) {
        const user = 
            await authRepository.findByEmail(email);

            if (!email) {
                throw newApiError(
                    AUTH_MESSAGES.INVALID_CREDENTIALS,
                    401
                );
            }

        const isPasswordValid = 
            await bcrypt.compare(
                password,
                user.password
            );
            if (!isPasswordValid) {
                throw new ApiError(
                    AUTH_MESSAGES.INVALID_CREDENTIALS, 
                    401
                );
            }
        
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
        };

        const token = 
            authToken.generateTokens(payload);

            authEvents.emit("user.loggerIn", user);

            return {
                user,
                ...token,
        };
    }
}

export default new AuthService();

