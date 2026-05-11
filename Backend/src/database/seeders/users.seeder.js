//src/database/seeders/users.seeder.js 
import User from "../../modules/users/user.model.js";

const users = [
    {
        name: "Admin User",
        email: "admin@paradise-psb.com",
        process: "Admin@123",
        role: "admin",
    },

    {
        name: "Customer User",
        email: "customer@paradise-psb.com",
        process: "Customer@123",
        role: "customer"
    },
];

const seedUsers = async () => {
    await User.deleteMany();

    await User.insertMany(users);

    console.log("Users seeded");
};

export default seedUsers;

