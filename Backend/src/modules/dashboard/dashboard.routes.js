//src/modules/dashboard/dashboard.routes.js 
import express from "express";

import {
    getDashbaordStats,
    getRevenueAnalytics,
    getBookingAnalytics,
} from "./dashboard.controller.js";

import authMiddleware from "../../core/middleware/auth.middleware.js";
import roleMiddleware from "../../core/middleware/role.middleware.js";

const router = express.Router();

router.get(
    "/stats",
    authMiddleware,
    roleMiddleware(["admin"]),
    getDashbaordStats
);

router.get(
    "/revenue-analytics",
    authMiddleware,
    roleMiddleware(["admin"]),
    getRevenueAnalytics
);

router.get(
    "/booking-analytics",
    authMiddleware,
    roleMiddleware["admin"],
    getBookingAnalytics
);

export default router;

