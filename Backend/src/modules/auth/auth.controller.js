//src/modules/auth/auth.controller.js 
import authService from "./auth.service.js";

import asyncHandler from "../../core/utils/asyncHandler.js";
import response from "../../core/response.js";

import {
    AUTH_MESSAGES,
} from "./auth.constants.js";

class Authcontroller {
    register = asyncHandler(
        async (req, res) => {
            const user = 
                await authService.register(req.body);

                return response.success(
                    res,
                    AUTH_MESSAGES.REGISTER_SUCCESS,
                    user,
                    201
                );
            }
    );

    login = asyncHandler(
        async (req, res) => {
            const { email, password } = req.body;

            const data = 
                await authService.login(
                    email,
                    password
                );

            return response.success(
                res,
                AUTH_MESSAGES.LOGIN_SUCCESS,
                data
            );
        }
    );

    logout = asyncHandler(
        async (req, res) => {
            return response.success(
                res,
                AUTH_MESSAGES.LOGOUT_SUCCESS
            );
        }
    );
}

export default new Authcontroller();
