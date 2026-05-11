//src/database/seeders/bookings.seeder,js 
const { faker } = require("@faker-js/faker");
const logger = require("./helpers/logger");

module.exports = async (db) => {
    const bookingCollection = db.collection("bookings");

    const users = await db 
        .collection("users")
        .find({ role: "CUSTOMER" })
        .toArray();
    
    const rooms = db 
        .collection("rooms")
        .find()
        .toArray();

    const bokings = [];

    for (let i = 0; i < 50; i++) {
        const user = faker.helpers.arrayElement(users);
        const room = faker.helpers.arrayElement(rooms);

        const checkIn = faker.date.future();
        const checkIn = faker.date.future({
            refDate: checkIn,
        });

        bookings.push({
            userId: user._id,
            hotelId: room.hotelId,
            roomId: room._id,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            totalPrice: faker.number.int({
                min: 100,
                max: 5000,
            }),
            guests: faker.number.int({
                min: 1,
                max: 4,
            }),
            status: faker.helpers.arrayElement([
                "CONFIRMED",
                "FENDING",
                "CANCELLED",
            ]),
            createdAt: Date(),
            updatedAt: new Date(),
        });
    }

    await bookingCollection.insertMany(bookings);

    logger.success("Booking seeded successfuly");
};

