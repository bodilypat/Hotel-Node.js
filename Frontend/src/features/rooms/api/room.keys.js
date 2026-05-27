//src/features/rooms/api/room.keys.js 

/* --------------------------------------
**          Room Query Keys              **
**  Centralized React query cache keys   **
**  for consistency abd scalability      **
----------------------------------------- */

export const ROOM_QUERY_KEYS = {
/* ROOT  */

    ALL: ["rooms"],

    /* ROOMS LIST */

    ROOMS: ["rooms", "list"],
    ROOM_LIST: (params = {}) => [
        ...ROOM_QUERY_KEYS.ROOM_LIST,
        params,
    ],

    /* ROOM DETAILS */

    ROOM: ["room", "detail"],
    ROOM_DETAIL: (roomId) => [
        ...ROOM_QUERY_KEYS.ROOM,
        roomId,
    ],

    /* ROOM AVAILABILITY */

    ROOM_AVAILABILITY: [
        "rooms",
        "availability",
    ],

    ROOM_AVAILABILITY_FITLERS: (
        filters = {}
    ) => [
        ...ROOM_QUERY_KEYS
            .ROOM_AVAILABILITY,
        filters,
    ],

    /* FEATURED ROOMS */

    FEATURED_ROOMS: [
        "rooms",
        "featured",
    ],

    /* ROOM ANALYTICS */
    
    ROOM_ANALYTICS: [
        "rooms",
        "analytics",
    ],

    ROOM_ANALYTICS_PARAMS: (
        params = {}
    ) => [
        ...ROOM_QUERY_KEYS
            .ROOM_ANALYTICS,
        params,
    ],

    /* ROOM BOOKINGS */

    ROOM_BOOKINGS: [
        "rooms",
        "bookings",
    ],

    ROOM_BOOKING_DETAIL: (
        bookingId 
    ) => [
        ...ROOM_QUERY_KEYS
            .ROOM_BOOKINGS,
        bookingId,
    ],

    /* ROOM IMAGES */

    ROOM_IMAGES: (roomId) => [
        "rooms",
        roomId,
        "images",
    ],

    /* ROOM PRICING */
    
    ROOM_PRICING: (roomId) => [ 
        "rooms",
        roomId,
        "pricing",
    ],

    /* ROOM MAINTENANCE */

    ROOM_MAINTENANCE: (
        roomId
    ) => [
        "rooms",
        roomId,
        "maintenance",
    ],

    /* ROOM CALENDAR */

    ROOM_CALENDAR: (roomId) => [
        "rooms",
        roomId,
        "calendar",
    ],
};

export default ROOM_QUERY_KEYS;

