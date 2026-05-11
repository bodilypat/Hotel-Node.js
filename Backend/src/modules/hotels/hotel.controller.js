//src/modules/hotels/hotel.controller.js 
import hotelService from "./hotel.service.js";

import asyncHandler from "../../core/utils/asyncHandler.js";
import response from "../../core/utils/response.js";

import {
    HOTEL_MESSAGES,
} from "./hotel.contants.js";

class HotelController {
    createHotel = asyncHandler(
        async (req, res) => {
            const hotel = 
                await hotelService.createHotel({
                    ...req.body,
                    owner: req.user.id,
                });
            
            return response.success(
                res,
                HOTEL_MESSAGES.HOTEL_CREATED,
                hotel,
                201
            );
        }
    );

    getHotels = asyncHandler(
        async (req, res) => {
            const hotels =  
                await hotelService.getHotels();

            return response.success(
                res,
                HOTEL_MESSAGES.HOTELS_FETCHED,
                hotels
            );
        }
    );

    getHotelById = asyncHandler(
        async (req, res) => {
            const hotel = 
                await hotelService.getHotelById(
                    req.params.id
                );
            
            return response.success(
                res,
                HOTEL_MESSAGES.HOTELS_FETCHED,
                hotel
            );
        }
    );

    updateHotel = asyncHandler(
        async (req, res) => {
            const hotel = 
                await hotelService.updateHotel(
                    req.params.id,
                    req.body
                );
            return response.success(
                res,
                HOTEL_MESSAGES.HOTEL_UPDATED,
                hotel
            );
        }
    );

    deleteHotel = asyncHandler(
        async (req, res) => {
            await hotelService.deleteHotel(
                req.param.id
            );

            return response.success(
                res,
                HOTEL_MESSAGES.HOTEL_DELETED
            );
        }
    );
}

export default new HotelController();

