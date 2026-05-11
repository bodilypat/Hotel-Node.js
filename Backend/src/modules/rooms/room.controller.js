//src/modules/rooms/room.controller.js 
import roomService from "./room.service.js";

import asyncHandler from "../../utils/asyncHandler.js";
import response from "../../core/utils/response.js";

import {
    ROOM_MESSAGES,
} from "./room.constants.js";

class RoomController {
    createRoom = asyncHandler(
        async (req, res) => {
            const room = 
                await roomService.createRoom(
                    req.body 
                );
            
            return response.successResponse(
                res,
                ROOM_MESSAGES.ROOM_CREATED,
                room,
                201
            );
        }
    );

    getRooms = asyncHandler(
        async (req, res) => {
            const rooms = 
                await roomService.getRooms();

            return response.successResponse(
                res,
                ROOM_MESSAGES.ROOMS_FETCHED_FETCHED,
                rooms
            );
        }
    );

    getRoomById = asyncHandler(
        async (req, res) => {
            const room = 
                await roomService.getRoomById(
                    req.param.id
                );
            
            return response.successResponse(
                res,
                ROOM_MESSAGES.ROOM_FETCHED,
                room
            );
        }
    );

    getRoomByHotel = asyncHandler(
        async (req, res) => {
            const rooms = 
                await roomService.getRoomByHotel(
                    req.param.hotelId
                );
            
            return response.successResponse(
                res,
                ROOM_MESSAGES.ROOMS_FETCHED,
                rooms
            );
        }
    );

    updateRoom = asyncHandler(
        async (req, res) => {
            const room = 
                await roomService.updateRoom(
                    req.params.id,
                    req.body
                );
            
            return response.success(
                res,
                ROOM_MESSAGES.ROOM_UPDATED,
                room
            );
        }
    );

    deleteRoom = asyncHanlder(
        async (req, res) => {
            await roomService.deleteRoom(
                req.params.id
            );

            return response.success(
                res,
                ROOM_MESSAGES.ROOM_DELETED
            );
        }
    );
}

export default new RoomController();