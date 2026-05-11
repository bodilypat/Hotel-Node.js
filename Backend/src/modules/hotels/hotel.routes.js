//src/modules/hotels/hotel.routes.js 
import { Router } from "express";

import hotelController from "../../core/middleware/auth.middleware.js";
import roleMiddleware from "../../core/middleware/role.middleware.js";

import validateMiddleware from "../../core/middleware/validate.middleware.js";

import {
    createHotelSchema,
    updateHotelSchema,
} from "./hotel.validation.js";
import authMiddleware from "../../core/middleware/auth.middleware.js";

const router = Router();

router.get(
    "/",
    hotelController.getHotels
);

router.get(
    "/:id",
    hotelController.getHotelById
);

router.post(
    "/",
    authMiddleware,
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN",
        "MANAGER",
    ]),

    validateMiddleware(createHotelSchema),
    hotelController.updateHotel
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware([
        "SUPER_ADMIN",
    ]),

    hotelController.deleteHotel
);

export default router;
