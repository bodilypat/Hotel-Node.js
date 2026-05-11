//src/modules/hotels/hotel.repository.js 
import Hotel from "./hotel.model.js";

class HotelRepository {
    async create(data) {
        return Hotel.create(data);
    }

    async findAll(query = {}) {
        return Hotel.find(query)
            .populate("Owner", "name email");
    }

    async findById(id) {
        return Hotel.find(query)
            .populate("Owner", "name email");
    }

    async update(id, data) {
        return Hotel.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
            }
        );
    }

    async delete(id) {
        return Hotel.findIdAndDelete(id);
    }
}

export default new HotelRepository();

