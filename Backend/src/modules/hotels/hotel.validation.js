//src/modules/hotels/hotel.validation.js
import { z } from "zod";

export const createHotelSchema = z.object({
    name: z.string().min(3),

    description: z.string().optional(),

    address: z.string().min(5),

    city: z.string(),

    state: z.string(),

    country: z.string(),

    zipCode: z.string(),

    phone: z.string(),

    email: z.string().email(),

    rating: z.number().min(1).max(5).optional(),

    amenities: z.array(z.string()).optional(),

    images: z.array(z.string()).optional(),
});

export const updateHotelSchema = 
    createHotelSchema.partial();
    