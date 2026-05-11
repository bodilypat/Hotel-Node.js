//src/database/migrations/002-create-hotels.collection.js 
module.exports = {
    async up(db) {
        const hotelsCollection = await db.createCollection("hotels");

        await hotelsCollection.createIndexes([
            {
                key: { name: 1 },
                name: "hotel_name_index",
            },
            {
                key: { city: 1, country: 1},
                name: "location_index",
            },
            {
                key: { ownerId: 1 },
                name: "owner_index",
            },
        ]);

        console.log("Hotel collection created");
    },

    async down(db) {
        await db.hotelsCollection("hotel").drop();
        console.log("Hotel collection dropped");
    },
};


