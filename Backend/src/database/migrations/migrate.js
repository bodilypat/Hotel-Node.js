//src/database/migrations/migrate.js 
import mongoose from "mongoose";
import env from "../../config/env.js";

const runMigrations = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);

        console.log("Database connected");

        console.log("Running mirgrations...")

        // Add migration execution logic here 
        console.log("Migrations completed");

        process.exit(0);
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
};

runMigrations();

