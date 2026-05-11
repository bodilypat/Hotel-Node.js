//src/modules/auth/auth.routes.js 
import { Router } from "express";

import authController from "./auth.controller.js";

import validateMiddleware from "../../core/middleware/validate.middleware.js";

import {
    registerSchema,
    loginSchema,
} from "./auth.validation.js";

const router = Router();

router.post(
    "/register",
    validateMiddleware(registerSchema),
    authController.register
);

router.post(
    "/login",
    validateMiddleware(loginSchema),
    authController.log 
);

export default router;
