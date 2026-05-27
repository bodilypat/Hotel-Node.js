//src/features/rooms/api/room.endpoints.js 

/* ----------------------------------
** Room API Endpoints 
** Centralized room endpoints 
** for consistency and scalability 
** ----------------------------------
 */

const ROOM_BASE = "/rooms";

export const ROOM_ENDPOINTS = {

    /* ROOM CRUD */

    GET_ROOMS:
        ROOM_BASE,
    
    GET_ROOM_BY_ID: (roomId) =>
        `${ROOM_BASE}/${roomId}`,

    CREATE_ROOM:
        ROOM_BASE,

    UPDATE_ROOM: (roomId) =>
        `${ROOM_BASE}/${roomId}`,

    DELETE_ROOM: (roomId) =>
        `${ROOM_BASE}/${roomId}`,

    DUPLICATE_ROOM: (roomId) => 
        `${ROOM_BASE}/${roomid}/duplicate`,

    /* AVAILABILITY */

    GET_ROOM_AVAILABILITY:
        `${ROOM_BASE}/availability`,

    /* BOOKING */

    BOOK_ROOM: (roomId) =>
        `${ROOM_BASE}/${roomId}/book`,

    CANCEL_ROOM_BOOKING: (
        roomId,
        bookingId
    ) => `${ROOM_BASE}/${roomId}/bookings/${bookingId}/cancel`,

    /* ROOM IMAGES */

    UPLOAD_ROOM_IMAGES: (roomId) => 
        `${ROOM_BASE}/${roomId}/images`,

    DELETE_ROOM_IMAGE: (
        roomId,
        imageId
    ) => `${ROOM_BASE}/${roomId}/images/${imageId}`,

    /* ROOM ANALYTICS */

    GET_ROOM_ANALYTICS:
        `${ROOM_BASE}/analytics`,

    /* FEATURED ROOMS */

    GET_FEATURED_ROOMS:
        `${ROOM_BASE}/featured`,

    /* ROOM PRICING */

    UPDATE_ROOM_PRICING: (roomId) => 
        `${ROOM_BASE}/${roomId}/pricing`,

    /* ROOM MAINTENANCE */

    UPDATE_ROOM_MAINTENANCE: (
        roomId
    ) => 
        `${ROOM_BASE}/{roomId}/maintenance`,

    /* ROOM CALENDAR */
    
    GET_ROOM_CALENDAR: (roomId) => 
        `${ROOM_BASE}/${roomId}/calendar`,
};

export default ROOM_ENDPOINTS;
