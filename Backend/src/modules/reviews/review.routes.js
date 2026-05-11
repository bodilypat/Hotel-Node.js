//src/modules/reviews/review.routes.js 
import express from "express";

import {
    createReview,
    getReviews,
    getReview,
    getHotelReviews,
    updateReview,
    deleteReview,
} from "./review.controller.js";

import authMiddleware from "../../core/middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    createReview
);

router.get("/", getReviews);

router.get("/:id", getReview);

router.get(
    "/hotel/:hotelId",
    authMiddleware,
    deleteReview
);

export default router;

