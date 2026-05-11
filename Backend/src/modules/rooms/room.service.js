//src/modules/rooms/room.service.js 
import roomRepository from "./room.repository";

import ApiError from "../../core/error/ApiError.js";

import {
    ROOM_MESSAGES,
} from "./room.constants.js";

class RoomService {
    async createRoom(data) {
        return roomRepository.create(data);
    }

    async getRooms(query = {}) {
        return roomRepository.findAll(query);
    }

    async getRoomById(id) {
        const room = 
            await roomRepository.findById(id);

        if (!room) {
            throw new ApiError(
                ROOM_MESSAGES.ROOM_NOT_FOUND,
                404
            )
        }

        return room;
    }

    async getRoomsByHotel(hotelId) {
        return roomRepository.findByHotel(
            hotelId
        );
    }

    async updateRoom(id, data) {
        const room = 
            await roomRepository.update(
                id, 
                data
            );
        
        if (!room) {
            throw new ApiError(
                ROOM_MESSAGES.ROOM_NOT_FOUND,
                404
            );
        }

        return room;
    }

    async deleteRoom(id) {
        const room = 
            await roomRepository.delete(id);

        if (!room) {
            throw new ApiError(
                ROOM_MESSAGES.ROOM_NOT_FOUND,
                404
            );
        }

        return true;
    }
}

export default RoomService();

