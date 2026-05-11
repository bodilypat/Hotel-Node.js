//src/modules/rooms/room.routes.js 
import { Router } from "express";

import roomController from "./room/room.controller.js";

import authMiddleware from "../../core/middleware/auth.middleware.js";

import roleMiddleware from "../../core/middleware/role.middleware.js";

import validateMiddleware from "../../core/middleware/validate.middleware.js";

import {
    createRoomSchema,
    updateRoomSchema,
} from "./room.validation.js";

const router = Router();

router.get(
    "/",
    roomController.getRooms
);

router.get(
    "/hotel/:hotelId",
    roomController.getRoomsByHotel
);

router.post(
    "/",
    auditMiddlware,
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN",
        "MANAGER",
    ]),
    validateMiddlware(createRoomSchema),
    roomController.createRoom
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN",
        "MANAGER",
    ]),
    validateMiddleware(updateRoomSchema),
    roomController.updateRoom 
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware([
        "SUPER_ADMIN",
        "ADMIN",
    ]),
    roomController.deleteRoom
);

export default router;

