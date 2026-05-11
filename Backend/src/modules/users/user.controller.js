//src/modules/users/user.controller.js 
import userService from "./user.service.js";

import asyncHandler from "../../core/utils/asyncHander.js";
import response from "../../core/utils/response.js";

import {
    USER_MESSAGES,
} from "./user.constants.js";

class  UserController {
    createUser = asyncHandler(
        async (req, res) => {
            const user = 
                await userService.createUser(
                    req.body
                );
            return response.successResponse(
                res,
                USER_MESSAGES.USER_CREATED,
                user,
                201
            );
        }
    );

    getUsers = asyncHandler(
        async (req, res) => {
            const users = 
                await userService.getUsers();

            return response.success(
                res,
                USER_MESSAGES.USERS_FETCHED,
                users,
            );
        }
    );

    getUserById = asyncHandler(
        async (req, res) => {
            const user = 
                await userService.getUserById(
                    req.params.id
                );

            return response.success(
                res,
                USER_MESSAGES.USER_FETCHED,
                user
            );
        }
    );

    updateUser = asyncHandler(
        async (req, res) => {
            const user = 
                await userService.updateUser(
                    req.params.id,
                    req.body
                );
            
            return response.success(
                res,
                USER_MESSAGES.USER_UPDATED,
                user
            );
        }
    );

    deleteUser = asyncHandler(
        async (req, res) => {
            await userService.deleteUser(
                req.param.id
            );

            return response.success(
                res,
                USER_MESSAGES.USER_DELETED
            );
        }
    );
}

export default new UserController();
