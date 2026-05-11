//src/database/migrations/003-create-rooms.collection.js 
module.exports = {
    async up(db) {
        const roomCollection = await db.createCollection("rooms");

        await roomCollection.createIndexes([
            {
                key: { hotelId: 1},
                name: "hotelId_index",
            },
            {
                key: { roomNumber: 1, hotelId: 1 },
                unique: true,
                name: "unique_room_per_hotel",
            },
            {
                key: { type: 1 },
                name: "room_type_index",
            },
            {
                key: { pricePerNight: 1 },
                name: "price_index",
            },
            {
                key: { availability: 1 },
                name: "availability_index",
            },
        ]);

        console.log("Rooms collection created");
    },

    async down(db) {
        await db.collection("rooms").drop();
        console.log("Rooms collection dropped");
    },
};

