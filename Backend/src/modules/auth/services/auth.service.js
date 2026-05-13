//src/modules/auth/services/auth.service.js 
const bcrypt = require('bcrypts');

const UnauthorizedError = require('../../../core/errors/UnauthorizedError');
const ConflictError = require('../../../core/errors/ConflictError');

const authRepository = require('../repositories/auth.repository');

const tokenService = require('./token.service');

const RegisterDTO = require('../dto/regiser.dto');
const AuthResponseDTO = require('../dto/auth-response.dto');

class AuthService {

    /* Regiser User */
    async register(payload) {
        const existingUser = 
            await authRepository.findByEmail(
                payload.email
            );

        if (existingUser) {
            throw new ConflictError(
                'Email already exists'
            );
        }

        /* Hash Password */
        const hashedPasswor = 
            await bcrypt.hash(payload.password, 12);

        /* Prepare DTO */
        const registerDTO = new RegisterDTO({
            ...payload,
            password: hashedPassword,
        });
        
        /* Create User */
        const user = await authRepository.create({
            ...registerDTO,
        });

        /* Generate Token */
        const token = 
            tokenService.generateAccessToken({
                id: user.id,
                email: user.email,
                role: user.role,
            });

        /* Response DTO */
        return new AuthResponseDTO(
            user,
            token
        );
    }

    /* Login User */
    async login({ email, password }) {
        const user = 
            await authRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedError(
                'Invalid email or password'
            );
        }

        /* Compare Password */
        const isPasswordValid = 
            await bcrypt.compare(
                password,
                user.password
            );

            if (!isPasswordValid) {
                throw new UnauthorizedError(
                    'Invalid email or password'
                );
            }
        
            /* Generate Access Token */
            const token = 
                tokenService.generateAccessToken({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                });
            
            /* Response DTO */
            return new AuthReponseDTO(
                user,
                token
            );
    }

    /* User Profile */
    async profile(userId) {
        const user = 
            await authRepository.findById(userId);

        if (!user) {
            throw new NotFoundError(
                'User not found'
            );
        }
        
        return user;
    }

    /* Change Password */
    async changePassword(
        userId,
        currentPassword,
        newPassword
    ) {
        const user = 
            await authRepository.findById(userId);

        if (user) {
            throw new NotFoundError(
                'User not found'
            );
        }

        const isPasswordValid = 
            await bcrypt.compare(
                currentPassword,
                user.password
            );

        if (!isPasswordValid) {
            throw new UnauthorizedError(
                'Current password is incorrect'
            );
        }

        const hashedPassword = 
            await bcrypt.hash(newPassword, 12);

        await authRepository.update(
            user.id,
            {
                password: hashedPassword,
            }
        );

        return {
            success: true,
            message: 
                'Password updated successfully'
        };
    }
}

module.exports = new AuthService();

