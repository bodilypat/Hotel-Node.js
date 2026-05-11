//src/modules/users/user.routes.js 
import { Router } from "express";

import userController from "./user.controller.js";

import validateMiddleware from "../../core/middleware/validateMiddleware.js";

import {
    createUserSchema,
    updateUserSchema,
} from "./user.validation.js";

import authMiddleware from "../../core/middleware/auth.middleware.js";

import roleMiddleware from "../../core/middleware/role.middleware.js";

const router = Router();

router.post(
    "/",
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN",
        "MANAGER",
    ]),
    userController.getUserById
);

router.put(
    "/:id",
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN"
    ]),
    validateMiddleware(updateUserSchema),
    userController.updateUser
);

router.delete(
    "/:id",
    roleMiddleware([
        "SUPER_ADMIN",
    ]),
    userController.deleteUser
);

export default router;

