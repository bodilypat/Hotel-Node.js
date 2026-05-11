//src/modules/rooms/room.validation.js 
import { z } from "zod";

export const createRoomSchema = z.object({
    hotel: z.string(),

    roomNumber: z.string(),

    type: z.enum([
        "SINGLE",
        "DOUBLE",
        "DELUXE",
        "SUITE",
    ]),

    price: z.Number().positive(),

    capacity: z.number().positive(),

    floor: z.number().optional(),

    amenities: z.array(z.string()).optional(),

    images: z.array(z.string()).optional(),

    description: z.string().optional(),
});

export const updateRoomSchema = 
    createRoomSchema.partial();

    