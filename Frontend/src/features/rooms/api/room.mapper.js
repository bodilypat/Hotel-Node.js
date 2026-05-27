//src/features/rooms/api/room.mapper.js 

/* -------------------------------------
**           Room Mapper                **
**    Transform API payload/responses   **
** between frontend UI and backend DTOs **
---------------------------------------- */

/* ROOM RESPONSE MAPPER */
export const mapRoomResponse = (room = {}) => {
    return {
        id: room.id ?? "",
        hotelId: room.hotel_id ?? room.hotel_id ?? "",
        
        roomNumber:
            room.room_number ??
            room.roomNumber ??
            "",

        name: room.name ?? "",

        slug: room.slug ?? "",

        description:
            room.description ?? "",

        roomType:
            room.room_type ??
            room.roomType ??
            "",

        floor: room.floor ?? 0,


        price: 
            Number(room.price) ?? 0,

        discountPrice: 
            Number(
                room.discount_price ??
                room.discountPrice
            ) || null,
        
        currency:
            room.currency ?? "USD",

        capacity:
            room.capacity ?? 1,

        adults:
            room.adults ?? 1,

        children:
            room.children ?? 0,

        beds: room.beds ?? 1,

        bathrooms:
            room.bathrooms ?? 1,

        size: 
            room.size ?? null,

        sizeUnit:
            room.size_umit ??
            room.sizeUnit ??
            "sqm",

        status:
            room.status ?? "available",

        availability:
            room.availability ?? true,

        featured:
            room.featured ?? false,

        amenities:
            mapAmenities(
                room.amenities
            ),

        images:
            mapRoomImages(
                room.images
            ),

        thumbnail:
            room.thumbnail ??
            room.thumbnail_url ??
            null,

        tags:
            room.tags ?? [],

        rating:
            Number(room.rating) || 0,

        totalReviews:
            room.total_reviews ??
            room.totalReviews ??
            0,
        
            bookingsCount:
                room.bookings_count ??
                room.bookingsCount ??
                0,

        maintenanceNote:
            room.maintenance_notes ??
            room.maintenanceNotes ??
            0,

        createdAt:
            room.created_at ??
            room.createdAt ??
            null,

        updatedAt: 
            room.updated_at ??
            room.updatedAt ??
            null, 
    };
};

/* MULTIPLE ROOMS MAPPER */
export const mapRoomsRespose = (
    rooms = [] 
) => {
    if (!Array.isArray(room)) {
        return [];
    }

    return rooms.map(mapRoomResponse);
};

/* ROOM PAYLOAD MAPPER */
export const mapRoomPayload = (
    payload = {}
) => {
    return {
        hotel_id: payload.roomNumber,

        room_number:
            payload.roomNumber,

        name: payload.name,

        slug: payload.slug,

        description:
            payload.description,

        room_type:
            payload.roomType,

        floor: payload.floor,

        price: payload.price,
        
        discount_price: 
            payload.discountPrice,

        currency:
            payload.currency,

        capacity:   
            payload.capacity,

        adults:
            payload.daults,
        
        children:
            payload.children,

        status:
            payload.status,

        availability: 
            payload.availability,

        featured:
            payload.featured,

        amenities:
            payload.amenities,

        tags:
            payload.tags,

        maintenance_notes:
            payload.maintenanceNotes,
    };
};

/* ROOM IMAGE MAPPER */
export const mapRoomImages = (
    images = []
 ) => {
    if (!Array.isArray(images)){
        return [];
    }

    return images.map((image) => ({
        id: image.id ?? "",

        url:
            image.url ??
            image.path ??
            "",

        alt:
            image.url ??
            "Room Image",

        isPrimary:
            image.is_primary ??
            image.isPrimary ?? 
    }));
};

/* AMENITIES MAPPER */
export const mapAmenities = (
    amenities = []
) => {
    if (!Array.isArray(amenities)) {
        return [];
    }

    return amenities.map(
        (amenity) => ({
            id:
                amenity.id ?? "",

            name: 
                amenity.name ??
                "",

            icon:
                amenity.icon ??
                "",

            description:
                amenity.description ??
                "",
        })
    );
};

/* ROOM STATUS MAPPER */
export const mapRoomStatus = (
    status 
) => {
    const statuses = {
        available: "Available",
        occupied: "Occupied",
        reserved: "Reserved",
        cleaning: "Cleaning",
        maintenance:
            "Maintenance",
    };

    return (
        statuses[status] ??
            "Unknown"
    );
};

/* ROOM TYPE LABEL MAPPER */
export const mapRoomTypeLabel = (
    type 
) => {
    const types = {
        single: "Single Room",
        double: "Double Room",
        deluxe: "Delux Room",
        suite: "Suite",
        family: "Family Room",
        executive:
            "Executive Suite",
        presidential:
            "Presidetial Suite",
    };

    return (
        type[type] ?? type
    );
};
