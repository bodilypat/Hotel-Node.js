//src/modules/users/user.validation.js 
import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3),

    email: z.string().email(),

    password: z.string().min(6),

    role: z.enum([
        "SUPPER_ADMIN",
        "ADMIN",
        "MANAGER",
        "RECEPTIONIST",
        "CUSTOMER",
    ])
    .optional(),
    
    phone: z.string().optional(),
});
