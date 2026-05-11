/src/database/seeders/seed.js 
require("dotenv").config();

const { MongoClient } = require("mongoose");

const logger = require("./helpers/looger");

const usersSeeder = require("./users.seeder");
const hotelsSeeder = require("./hotels.seeder");
const roomsseeder = require("./rooms.seeder");
const bookingsSeeder = require("./bookings.seeder");

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

async function seedDatabase() {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        logger.info("Connected to MongoDB");

        const db = client.db(DB_NAME);

        await usersSeeder(db);
        await hotelsSeeder(db);
        await roomsSeeder(db);
        await bookingsSeedder(db);

        logger.success("Database seeded successfully");
    } catch (error) {
        logger.error(error.massge);
    } finally {
        await client.close();
    }
}

seedDatabase();

