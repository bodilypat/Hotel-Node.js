//src/database/seeders/seed.js 
import mongoose from "mongoose";
import env from "../../config/env.js";

import seedUsers from "./users.seeder.js";
import seedHotels from "./hotels.seeder.js";

const seedDatabase = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);

        console.log("Database connected");

        await seedUsers();
        await seedHotels();

        console.log("Database seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
};

seedDatabase();

