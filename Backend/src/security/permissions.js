//src/core/security/permissions.js 
const permissions = {
    USER_READ: "user:read",
    USER_CREATE: "user:create",
    USER_UPDATE: "user:update",
    USER_DELETE: "user:delete",

    HOTEL_READ: "hotel:read",
    HOTEL_CREATE: "hotel:create",
    HOTEL_UPDATE: "hotel:update",
    HOTEL_DELETE: "hotel:delete",

    ROOM_READ: "room:read",
    ROOM_CREATE: "room:create",
    ROOM_UPDATE: "room:update",
    ROOM_DELETE: "room:delete",

    BOOKING_READ: "booking:read",
    BOOKING_CREATE: "booking:create",
    BOOKING_UPDATE: "booking:update",
    BOOKING_DELETE: "booking:delete",

    PAYMENT_READ: "payment:read",
    PAYMENT_CREATE: "payment:create",

    REVIEW_CREATE: "review:create",
    REVIEW_DELETE: "review:delete",

    DASHBOARD_VIEW: "dashboard:view",
};

export default permissions;

