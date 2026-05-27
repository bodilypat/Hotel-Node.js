//src/features/rooms/api/rooms.api.js
import axiosClient from "@/services/axios";
import { ROOM_ENDPOINTS } from "./room.endpoints";
import {
    mapRoomPayload,
    mapRoomResponse,
    mapRoomsReponse,
} from "./room.mapper";

/* ----------------------------
**       ROOM API             **
** Centralized API Layer for: **
** Rooms
** Availability 
** Bookng 
** Room Status 
** Pricing 
** --------------------------- */

/* GET ALL ROOMS */
export const getRooms = async (params = {}) => {
    const response = await axiosClient.get(
        ROOM_ENDPOINTS.GET_ROOMS,
        {
            params,
        }
    );

    return mapRoomsReponse(response.data);
};

/* GET SINGLE ROOM */
export const getRoomById = async (roomId) => {
    const response = await axiosClient.get(
        ROOM_ENDPOINTS.GET_ROOM_BY_ID(roomId)
    );

    return mapRoomResponse(response.data);
};

/* UPDATE ROOM */
export const updateRoom = async ({ roomId, payload }) => {
    const roomData = mapRoomPayload(payload);

    const response = await axiosClient.put(
        ROOM_ENDPOINTS.UPDATE_ROOM(roomId),
        roomData 
    );

    return mapRoomResponse(response.data);
};

/* DELETE ROOM */
export const deleteRoom = async (roomId)=> {
    const response = await axiosClient.delete(
        ROOM_ENDPOINTS.DELETE_ROOM(roomId)
    );

    return response.data;
};

/* UPDATE ROOM STATUS  */
export const updateRoomStatus = async ({
    roomId,
    status,
}) => {
    const response = await axiosClient.patch(
        ROOM_ENDPOINTS.UPDATE_ROOM_STATUS(roomId),
        { status }
    );

    return mapRoomResponse(response.data);
};

/* GET ROOM AVAILABILITY */
export const getRoomStatus = async ({
    checkIn,
    checkOut,
    guests,
    roomType,
}) => {
    const response = await axiosClient.get(
        ROOM_ENDPOINTS.ROOM_AVAILABILITY,
        {
            params: {
                checkIn,
                checkOut,
                guests, 
                roomType, 
            },
        }
    );

    return response.data 
};

/* UPLOAD ROOM IMAGES */
export const uploadRoomImages = async ({
    roomId,
    files,
}) => {
    const formData = new formData();

    files.forEach((file) => {
        forData.append("images", file);
    });

    const response = await axiosClient.post(
        ROOM_ENDPOINTS.UPLOAD_ROOM_IMAGES(roomId),
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

/* DELETE ROOM IMAGE */
export const deleteRoomImage = async ({
    roomId,
    imageId,
}) => {
    const response = await axiosClient.delete(
        ROOM_ENDPOINTS.DELETE_ROOM_IMAGE(
            roomId,
            imageId 
        )
    );

    return response.data;
};

/* BOOK ROOM */
export const bookRoom = async ({
    roomId,
    bookingData,
}) => {
    const response = await axiosClient.post(
        ROOM_ENDPOINTS.BOOK_ROOM(roomId),
        bookingData 
    );

    return response.data;
}

/* ROOM ANALYTICS */
export const getRoomAnalytics = async (
    params = {}
) => {
    const response = await axiosClient.get(
        ROOM_ENDPOINTS.ROOM_ANALYTICS,
        {
            params,
        }
    );

    return response.data;
};

/* BULK UPDATE ROOM STATUS */
export const duplicateRoom = aync (roomId) => {
    const response = await axiosClient.post(
        ROOM_ENDPOINTS.DUPLICATE_ROOM(roomId)
    );

    return mapRoomResponse(response.data);
};

