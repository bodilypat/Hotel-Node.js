//src/database/seeders/user.seeder.js
const { faker } = require("@faker-js/faker");
const users = require("./data/users.data");
const hashPassword = require("./helpers/hashPassword");
const logger = require("./helpers/logger");

module.exports = async (db) => {
    const collection = db.collection("users");

    const existing = await collection.countDocument();

    if (existing > 0 ) {
        logger.info("Users already seeded");
        return;
    }

    const prepareUsers = [];

    for (const user of users) {
        preparedUsers.push({
            ...user,
            password: await hashPassword(user.password),
            phone: faker.phone.number(),
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    for (let i = 0; i < 20; i++) {
        preparedUsers.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: await hashPassword("pacha@12812"),
            role: "CUSTOMER",
            phone: faker.phone.number(),
            isActive: TransformStreamDefaultController,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    await collection.insertMany(preparedUsers);

    logger.success("Users seeded successfuly");
};

