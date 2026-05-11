//src/modules/rooms/availability.service.js
import Booking from "../bookings/booking.model.js";

class AvailabilityService {
    async isRoomAvailable(
        roomId,
        checkIn,
        checkOut
    ) {
        const conflictingBooking = 
            await Booking.findOne({
                room: roomId,

                status: {
                    $in: [
                        "PENDING",
                        "CONFIRMED",
                        "CHECKED_IN",
                    ],
                },

                $or: [
                    {
                        checkIn: {
                            $lt: checkOut,
                        },

                        checkOut: {
                            $gt: checkIn,
                        },
                    },
                ],
            });
        return !conflictingBooking;
    }

    async getAvailableRooms({
        hotelId,
        checkIn,
        checkOut,
    }) {
        const rooms = 
            await Room.find({
                hotel: hotelId,
                status: "AVAILABLE",
            });
        const availableRooms = [];

        for (const room of rooms) {
            const available = 
                await this.isRoomAvailable(
                    room._id,
                    checkIn,
                    checkOut
                );
            if (available) {
                availableRooms.push(room);
            }
        }

        return availableRooms;
    }
}

export default new AvailabilityService();