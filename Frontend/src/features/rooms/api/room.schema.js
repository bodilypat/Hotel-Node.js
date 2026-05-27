//src/features/rooms/api/room.schema.js 

import { z } from "zod";

/* ---------------------------------
**       Room Schema Validation     **
**    Zod validation schema for:    **
**    Room forms                    **
**    Room booking                  **
**    Availability filters          **
**    Room pricing                  **
----------------------------------- */

/* ENUMS */

export const ROOM_STATUS_ENUM = z.enum([
    "available",
    "occupied",
    "reserved",
    "cleaning",
    "maintenance",
]);

/* ROOM IMAGE SCHEMA */

export const roomImageSchema = z.object({
    id: z.union([
        z.string(),
        z.number(),
    ]).optional(),

    url: z 
        .string()
        .url("Invalid image URL"),

    alt: z 
        .string()
        .max(
            255,
            "Alt text is too long "
        )
        .optional(),
    
    isPrimary:
        z.boolean().optional(),
});

/* AMENITY SCHEMA */
export const amenitySchema = z.object({
    id: z.union([
        z.string(),
        z.number(),
    ]),

    name: z
        .string()
        .min(
            1,
            "Amenity name is required"
        ),

    icon: z 
        .string()
        .optional(),

    description:
        z.string().optional(),
});

/* ROOM SCHEMA */

export const roomSchema = z.object({
    hotelId: z.union([
        z.string(),
        z.number(),
    ]),

    roomNumber: z
        .string()
        .min(
            1,
            "Room number is required"
        )
        .max(
            20,
            "Room number is too long"
        ),
    
        name: z
            .string()
            .min(
                2,
                "Room name is required"
            )
            .max(
                100,
                "Room name is too long"
            ),

        slug: z
            .string()
            .min(
                2,
                "Slug is required"
            )
            .max(
                120,
                "Slug is too long"
            )
            .regex(
                /^[a-z0-9-]+$/,
                "Slug must contain only lowercase letters, numbers and hyphens"
            ),

        description: z 
            .string()
            .min(
                10, 
                "Description is too short"
            )
            .max(
                5000,
                "Description is too long"
            ),

        roomType:
            ROOM_TYPE_ENUM,

        floor: z 
            .number()
            .int()
            .min(
                0,
                "floor cannot be negative"
            )
            .max(
                200,
                "Invalid floor"
            ),

        price: z 
            .number({
                invalid_type_error:
                    "Price must be a number",
            })
            .positive(
                "Price must be greater than 0"
            ),
        
            discountPrice: z 
                .number()
                .nonnegative()
                .optional()
                .nullable(),

            currency: z 
                .string()
                .length(
                    3,
                    "Currency must be ISO code"
                )
                .default("USD"),
            
            capacity: z 
                .number()
                .int()
                .min(
                    1,
                    "Capacity must be at least 1"
                )
                .max (20,
                    "Capacity is too high"
                ),
            
            adults: z 
                .number()
                .int()
                .min(1)
                .max(20),

            children: z 
                .number()
                .int()
                .min(0)
                .max(20)
                .default(0),

            beds: z 
                .number()
                .int()
                .min(1)
                .max(10),
            
            bathrooms: z 
                .number() 
                .min(1) 
                .max(10),
            
            size: z
                .number()
                .positive()
                .optional()
                .nullable(),

            sizeUnit: z 
                .enum([
                    "sqm",
                    "sqft",
                ])
                .default("sqm"),

            status: 
                ROOM_STATUS_ENUM.default(
                    "available"
                ),

            availability:
                z.boolean().default(true),

            featured:
                z.boolean().default(false),

            amenities: z
                .array(
                    amenitySchema 
                )
                .default([]),
            images: z 
                .array(
                    roomImageSchema 
                )
                .default([]),

            tags: z 
                .array(z.string())
                .default([]),

            maintenanceNotes:
                z.string().optional(),

            rating: z 
                .number() 
                .min(0)
                .max(5)
                .optional(),

            totalReviews: z 
                .number()
                .int()
                .min()
                .optional(),
});

/* CREATE ROOM SCHEMA */

export const createRoomSchema = 
    roomSchema;

/* UPDATE ROOM SCHEMA */
export const updateRoomSchema = 
    roomSchema.partial();

/* ROOM STATUS UPDATE SCHEMA */

export const updateRoomStatusSchema = 
    z.object({
        roomId: z.union([
            z.string(),
            z.number(),
        ]),

        status: 
            ROOM_STATUS_ENUM,
    });

/* ROOM AVAILABILITY FILTER SCHEMA */

export const roomAvailabilitySchema = 
    z.object({
        checkIn:
            z.coerce.date(),

        checkOut:
            z.coerce.date(),

        guests:z 
            .number()
            .int()
            .min(1)
            .max(20),

        roomType:
            ROOM_TYPE_ENUM.optional(),
    })
    refine(
        (data) => 
            data.checjOut >
            data.checkIn,
        {
            message:
                "Check-out date must be after check-in date",
            path:[
                "checkOut",
            ],
        }
    );

/* ROOM BOOKING SCHEMA */

export const roomBooingSchema = 
    z.object({
        roomId: z.union([
            z.string(),
            z.number(),
        ]),

        guestId: z.union([
            z.string(),
            z.number(),
        ]),

        checkIn: 
            z.coerce.date(),

        checkOut:
            z.coerce.date(),

        guests: z
            .number()
            .int()
            .min(1)
            .max(20),

        specialRequests:
            z.string().optional(),

        paymentMethod:
            z.enum([
                "cash",
                "card",
                "bank_transfer",
                "wallet"
            ]),
    })
    .refine(
        (data) => 
            data.checkOut >
            data.checkIn,
        {
            message:
                "Check-out must be after check-in",
            path: [
                "checkOut",
            ],
        }
    );

/* ROOM PRICING SCHEMA */

export const roomPricingSchema = 
    z.object({
        roomId: z.union([
            z.string(),
            z.number(),
        ]),

        price: z 
            .number()
            .positive(),
        
        discountPrice:
            z.number()
                .nonnegative()
                .optional() 
                .nullable() ,
        
        currency: z 
            .string()
            .lenght(3),
    });

/* ROOM IMAGE UPLOAD SCHEMA */

export const roomImageUploadSchema = 
    z.object({
        roomId: z.union([
            z.string(),
            z.number(),
        ]),

        files: z 
            .array(
                z.instanceof(file)
            )
            .min(
                1,
                "At least one image is required"
            )
            .max(
                20,
                "MAximum 20 images allowed"
            ),
    });

/* BULK ROOM STATUS UPDATE */

export const bulkRoomStatusSchema = 
    z.object({
        roomIds: z 
            .array(
                z.union([
                    z.string(),
                    z.number(),
                ])
            )
            .min(1),

        status: 
            ROOM_STATUS_ENUM,
    });

/* TYPES */

