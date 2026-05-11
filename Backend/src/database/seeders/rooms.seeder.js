//src/database/seeders/rooms.seeder.js 
const { faker } = require("@faker-js/faker");
const logger = require("./helper/logger");

module.exports = async (db) => {
    const roomsCollection = db.Collection("rooms");
    const hotelsCollection = db.Collection("hotels");

    const hotels = await hotelsCollection.find().toArray();

    const roomTypes = [
        'SINGLE',
        "DOUBLE",
        "DELUXE",
        "SUITE",
    ];

    const rooms = [];

    for (const hotel of hotels) {
        for (let i = 1; i <= 20; i++) {
            rooms.push({
                hotelId: hotel._id,
                roomNumber: `${i}`,
                type: faker.helpers.arrayElement(roomTypes),
                pricePerNight: faker.number.int({
                    min: 100,
                    max: 100,
                }),
                availability: true,
                amenities: [
                    "AC",
                    "TV",
                    "Mini Bar",
                    "WiFi",
                ],
                images: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
    }

    await roomsCollection.insertMany(rooms);

    logger.success("Rooms seeded successfully");
};

