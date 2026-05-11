//src/modules/hotels/hotel.service.js 
import hotelRepository from "./hotel.repository.js";

import ApiError from "../../core/error/ApiError.js";

import {
    HOTEL_MESSAGES,
} from "./hotel.constants.js";

class HotelService {
    async createHotel(data) {
        return hotelRepository.create(data);
    }

    async getHotels(query = {}) {
        return hotelRepository.findAll(query);
    }

    async getHotelById(id) {
        const hotel = 
            await hotelRepository.findById(id);

        if (!hotel) {
            throw new ApiError(
                HOTEL_MESSAGES.HOTEL_NOT_FOUND,
                404
            );
        }

        return hotel;
    }

    async updateHotel(id, data) {
        const hotel = 
            await hotelRepository.update(
                id,
                data
            );

        if (!hotel) {
            throw new ApiError(
                HOTEL_MESSAGES.HOTEL_NOT_FOUND,
                404
            );
        }
        
        return hotel;
    }

    async deleteHotel(id) {
        const hotel =
            await hotelRepository.delete(id);

        if (!hotel) {
            throw new ApiError(
                HOTEL_MESSAGES.HOTEL_NOT_FOUND,
                404
            );
        }

        return true;
    }
}

export default new HotelService();