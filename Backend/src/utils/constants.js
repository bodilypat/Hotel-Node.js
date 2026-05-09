//src/core/utils/constants.js 
/* User Roles */
export const USER_ROLES = {
    SUPER_ADMIN: "SUPER_ADMIN",
    HOTEL_ADMIN: "HOTEL_ADMIN",
    RECEPTIONIST: "RECEPTIONIST",
    GUEST: "GUEST",
    HOUSEKEEPING: "HOUSEKEEPING",
};

/ * Booking Statuses */
export const BOOKING_STATUSES = {
    PENDING: "PENDING",
    CONFIRMED: "CONFIRMED",
    CHECKED_IN: "CHECKED_IN",
    CHECKED_OUT: "CHECKED_OUT",
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
};

/* Payment Statuses */
export const PAYMENT_STATUSES = {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    REFUNDED: "REFUNDED",
};

/* Room Status */
export const ROOM_STATUSES = {
    AVAILABLE: "AVAILABLE",
    OCCUPIED: "OCCUPIED",
    MAINTENANCE: "MAINTENANCE",
    RESERVED: "RESERVED",
};

/* HTTP Status Codes */
export const HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

/* Pagination Defaults */
export const PAGINATION_DEFAULTS = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
};

