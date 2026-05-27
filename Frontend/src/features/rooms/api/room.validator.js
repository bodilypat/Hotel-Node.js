// src/features/rooms/api/room.validators.js

import {
    roomSchema,
    createRoomSchema,
    updateRoomSchema,
    updateRoomStatusSchema,
    roomAvailabilitySchema,
    roomBookingSchema,
    roomPricingSchema,
    roomImageUploadSchema,
    bulkRoomStatusSchema,
} from "./room.schema";

/* -------------------------------------------------------
 * Room Validators
 * -------------------------------------------------------
 * Centralized validation handlers for:
 * - Room creation
 * - Room updates
 * - Booking
 * - Availability
 * - Pricing
 * - Uploads
 * ------------------------------------------------------ */

/* GENERIC VALIDATOR */

export const validateSchema = (
    schema,
    data
) => {
    const result =
        schema.safeParse(data);

    if (!result.success) {
        return {
            success: false,

            errors:
                formatZodErrors(
                    result.error
                ),

            data: null,
        };
    }

    return {
        success: true,
        errors: null,
        data: result.data,
    };
};

/* ROOM VALIDATORS */

export const validateRoom = (
    data
) => {
    return validateSchema(
        roomSchema,
        data
    );
};

export const validateCreateRoom =
    (data) => {
        return validateSchema(
            createRoomSchema,
            data
        );
    };

export const validateUpdateRoom =
    (data) => {
        return validateSchema(
            updateRoomSchema,
            data
        );
    };

/* ROOM STATUS VALIDATOR */

export const validateRoomStatus =
    (data) => {
        return validateSchema(
            updateRoomStatusSchema,
            data
        );
    };

/* ROOM AVAILABILITY VALIDATOR */

export const validateRoomAvailability =
    (data) => {
        return validateSchema(
            roomAvailabilitySchema,
            data
        );
    };

/* ROOM BOOKING VALIDATOR */

export const validateRoomBooking =
    (data) => {
        return validateSchema(
            roomBookingSchema,
            data
        );
    };

/* ROOM PRICING VALIDATOR */

export const validateRoomPricing =
    (data) => {
        return validateSchema(
            roomPricingSchema,
            data
        );
    };

/* ROOM IMAGE VALIDATOR */

export const validateRoomImages =
    (data) => {
        return validateSchema(
            roomImageUploadSchema,
            data
        );
    };

/* BULK STATUS VALIDATOR */

export const validateBulkRoomStatus =
    (data) => {
        return validateSchema(
            bulkRoomStatusSchema,
            data
        );
    };

/* THROWING VALIDATORS */

export const validateRoomOrThrow =
    (data) => {
        return roomSchema.parse(
            data
        );
    };

export const validateCreateRoomOrThrow =
    (data) => {
        return createRoomSchema.parse(
            data
        );
    };

export const validateUpdateRoomOrThrow =
    (data) => {
        return updateRoomSchema.parse(
            data
        );
    };

export const validateRoomBookingOrThrow =
    (data) => {
        return roomBookingSchema.parse(
            data
        );
    };

/* ERROR FORMATTERS */

export const formatZodErrors = (
    error
) => {
    if (!error?.issues) {
        return {};
    }

    return error.issues.reduce(
        (acc, issue) => {
            const path =
                issue.path.join(
                    "."
                );

            if (!acc[path]) {
                acc[path] = [];
            }

            acc[path].push(
                issue.message
            );

            return acc;
        },
        {}
    );
};

/* FIELD ERROR HELPER */

export const getFieldError = (
    errors,
    field
) => {
    if (!errors) {
        return null;
    }

    const fieldErrors =
        errors[field];

    if (
        !fieldErrors ||
        !Array.isArray(
            fieldErrors
        )
    ) {
        return null;
    }

    return fieldErrors[0];
};

/* HAS ERRORS */

export const hasValidationErrors =
    (errors) => {
        return (
            !!errors &&
            Object.keys(errors)
                .length > 0
        );
    };

/* ASYNC VALIDATION WRAPPER */

export const validateAsync =
    async (
        schema,
        data
    ) => {
        try {
            const result =
                await schema.parseAsync(
                    data
                );

            return {
                success: true,
                errors: null,
                data: result,
            };
        } catch (error) {
            return {
                success: false,

                errors:
                    formatZodErrors(
                        error
                    ),

                data: null,
            };
        }
    };

/* ROOM FORM VALIDATOR */

export const validateRoomForm =
    async (data) => {
        return validateAsync(
            roomSchema,
            data
        );
    };

/* ROOM SEARCH FILTER VALIDATOR */

export const roomSearchFilterSchema =
    roomSchema
        .pick({
            roomType: true,
            status: true,
            featured: true,
            availability: true,
        })
        .partial()
        .extend({
            search:
                roomSchema.shape.name.optional(),

            minPrice:
                roomSchema.shape.price.optional(),

            maxPrice:
                roomSchema.shape.price.optional(),

            page:
                roomSchema.shape.floor.optional(),

            limit:
                roomSchema.shape.floor.optional(),
        });

export const validateRoomSearchFilters =
    (filters) => {
        return validateSchema(
            roomSearchFilterSchema,
            filters
        );
    };

/* VALIDATION MESSAGE HELPERS */

export const VALIDATION_MESSAGES = {
    REQUIRED:
        "This field is required",

    INVALID_EMAIL:
        "Invalid email address",

    INVALID_PRICE:
        "Invalid price amount",

    INVALID_DATE:
        "Invalid date",

    INVALID_ROOM_TYPE:
        "Invalid room type",

    INVALID_ROOM_STATUS:
        "Invalid room status",

    INVALID_CAPACITY:
        "Invalid room capacity",

    INVALID_IMAGE:
        "Invalid image file",

    INVALID_BOOKING:
        "Invalid booking data",
};

export default {
    validateRoom,
    validateCreateRoom,
    validateUpdateRoom,
    validateRoomStatus,
    validateRoomAvailability,
    validateRoomBooking,
    validateRoomPricing,
    validateRoomImages,
    validateBulkRoomStatus,
    validateRoomForm,
    validateRoomSearchFilters,
    validateSchema,
    validateAsync,
    formatZodErrors,
    getFieldError,
    hasValidationErrors,
};