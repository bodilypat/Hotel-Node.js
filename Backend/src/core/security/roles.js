//src/core/security/roles.js 
import permissions from "./permissions.js";

const roles = {
    SUPPER_ADMIN: [
        ...Object.values(permissions),
    ],

    ADMIN: [
        permissions.USER_READ,
        permissions.USER_CREATE,
        permissions.USER_UPDATE,

        permissions.HOTEL_READ,
        permissions.HOTEL_CREATE,
        permissions.HOTEL_UPDATE,
        permissions.HOTEL_DELETE,

        permissions.ROOM_READ,
        permissions.ROOM_CREATE,
        permissions.ROOM_UPDATE,
        permissions.ROOM_DELETE,

        permissions.BOOKING_READ,
        permissions.BOOKING_CREATE,
        permissions.BOOKING_UPDATE,
        permissions.BOOKING_DELETE,

        permissions.PAYMENT_CREATE,
        permissions.PAYMENT_READ,

        permisssion.DASHBOARD_VIEW,
    ],

    MANAGER: [
        permissions.HOTEL_READ,

        permissions.ROOM_READ,
        permissions.ROOM_CREATE,
        permissions.ROOM_UPDATE,


        permissions.BOOKING_READ,
        permissions.BOOKING_UPDATE,

        permissions.PAYMENT_READ,
        permissions.DASHBOARD_VIEW,
    ],

    RECEPTIONIST: [
        permissions.BOOKING_READ,
        permissions.BOOKING_CREATE,
        permissions.BOOKING_UPDATE,
        permissions.PAYMENT_CREATE,
    ],

    CUSTOMER: [
        permissions.BOOKING_CREATE,
        permissions.BOOKING_READ,
        permissions.REVIEW_CREATE,
    ],
}

export default roles;

