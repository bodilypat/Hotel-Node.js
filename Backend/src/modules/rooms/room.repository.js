//src/modules/rooms/room.repository.js 
import Room from "./room.model.js";

class RoomRepository {
    async create(data) {
        return Room.create(data);
    }

    async findAll(query = {}) {
        return Room.find(query)
            .populate("hotel", "name city");
    }

    async findById(id) {
        return Room.findById(id)
            .populate("hotel")
   }

   async findByHotel(hotelId) {
        return Room.find({
            hotel: hotelId,
        });
   }

   async update(id, data) {
        return Room.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
            }
        );
   }

   async delete(id) {
        return Room.findByIdAndDelete(id);
   }
}

export default new RoomRepository();



