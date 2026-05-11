//src/database/migrations/001-create-users.collections.js
const bcrypt = require("bcrypt");

module.exports = {
    async up(db) {
        const usersCollection = await db.createCollection("users");

        await usersCollection.createIndexes([
            {
                key: { email: 1},
                unique: true,
                name: "unique_email",
            },
            {
                key: { role: 1},
                name: "role_index",
            }
            ,
            {
                key: { createAt: -1},
                name: "createdAt_index",
            }
        ]);

        const password = await bcrypt.hash("Admin@psb", 10);

        await usersCollection.insertOne({
            name: "Supper Admin",
            email: "admin@paradise-psb.com",
            password,
            role: "SUPER_ADMIN",
            phone: "+10000000000",
            isActive: true,
            createAt: new Date(),
        });

        console.log("User collection created");
    },

    async down(db) {
        await db.collection("users").drop();
        console.log("Users collection dropped")
    },
};

