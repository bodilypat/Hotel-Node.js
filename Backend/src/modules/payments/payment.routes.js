//src/modules/payments/payment.routes.js 
import express from "express";

import {
    createPayment,
    getPayments,
    getPayment,
    updatePaymentStatus,
} from "./payment.controller.js";

import authMiddleware from "../../core/middleware/auth.middleware.js";

const router = express.router();

router.post(
    "/",
    authMiddleware,
    createPayment
);

router.get(
    "/",
    authMiddleware,
    getPayments
);

router.get(
    "/:id",
    authMiddleware,
    getPayment
);

router.patch(
    "/:id/status",
    authMiddleware,
    updatePaymentStatus
);

export default router;

