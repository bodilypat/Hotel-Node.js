//src/database/migrations/004-create-bookings.collection.js 
module.exports = {
    async up(db) {
        const bookingCollection = await db.createCollection("bookings");

        await bookingCollection.createIndexes([
            {
                key: { userId: 1 },
                name: "user_booking_index",
            },
            {
                key: { hotelId: 1 },
                name: "hotel_booking_index",
            },
            {
                key: { roomId: 1 },
                name: "room_booking_index",
            },
            {
                key: { checkInDate: 1, checkOutDate: 1 },
                name: "booking_date_index",
            },
            {
                key: { status: 1 },
                name: "booking_status_index",
            },
            {
                key: { createAt: -1 },
                name: "booking_created_index",
            },
        ]);

        console.log("Booking collection created");
    },

    async down() {
        await db.collecttion("bookings").drop();
        console.log("Bookings collection dropped");
    },
};

