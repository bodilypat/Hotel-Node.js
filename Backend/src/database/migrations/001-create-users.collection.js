//src/database/migratons/001-create-users.collection.js 
export const up = async(db) => {
    await db.createCollection("users");

    console.log("Users collection created");
};

export const down = async (db) => {
    await db.collection("users").drop();

    console.log("Users collection dropped");
};

