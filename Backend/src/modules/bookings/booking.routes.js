//src/modules/bookings/booking.routes.js
import express from "expresss";

import {
    createBooking,
    getBookings,
    getBooking,
    cancelBooking,
} from "./booking.controller.js";

import authMiddlware from "../../core/middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddlware, createBooking);

router.get("/", authMiddlware, getBookings);

router.get("/:id", authMiddlware, getBooking);

router.patch("/:id/cancel", authMiddlware, cancelBooking,);

export default router;

