//src/database/migrations/migrate.js 
require ("dotenv").config();

const path = require("path");
const fs = require("fs");
const { MongoClinet } = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

const migrationsPath = __dirname;

async function runMigrations() {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db(DB_NAME);

        const migrationFiles = fs 
            .readdirSync(migrationPath)
            .filter(
                (file) => 
                    file.endWith(".js") && 
                    file !== "migrate.js"
                )
            .sort();
            for (const file of migrationFiles) {
                console.log(`Running migration: $(file)`);

                const migration = require(path.join(migrationsPath, file));

                if (migration.up) {
                    await migration.up(db);
                }

                console.log(`Completed: $(file)`);
            }
        } catch (error) {
                console.error("Migration failed: ", error);
            } finally {
                await client.close();
    }
}

runMigrations();