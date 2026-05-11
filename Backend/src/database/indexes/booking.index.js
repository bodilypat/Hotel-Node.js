//src/database/indexes/booking.index.js 
import Booking from "../../modules/bookings/booking.model.js";

const createBookingIndexs = async () => {
    await Booking.collection.createIndex({
        hotel: 1,
    });

    await Booking.collection.createIndex({
        room: 1,
    });

    await Booking.collection.createIndex({
        user: 1,
    });

    await Booking.collection.createIndex({
        checkInDate: 1,
        checkOutDate: 1,
    });

    console.log("Booking indexes created");
};

export default createBookingIndexes;
