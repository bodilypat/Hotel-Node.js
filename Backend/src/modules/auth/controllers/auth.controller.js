//src/modules/auth/constrollers/auth.controller.js 
const BaseController = require('../../../core/base/BaseController');

const authService = require('../services/auth.service');

class AuthController extends BaseController {
    async register(req, res, next) {
        try {
            const result = await authService.register(
                req.body
            );

            return this.created(
                res,
                result,
                'User registered successfully'
            ); 
        } catch(error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const result = await authService.login(
                req.body
            );

            return this.success(
                res,
                result,
                'Login successful'
            );
        } catch (error) {
            next(error);
        }
    }

    async profile(req, res, next) {
        try {
            const user = await authService.profile(
                req.user.id
            );

            return this.success(
                res,
                user,
                'Profile fetched successful'
            );
        } catch (error) {
            next(error)
        }
    }
}

module.exports =  new AuthController();

