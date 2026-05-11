//src/code/utils/password.js 
import bcrypt from "bcryptjs";

const hasPassword = async (password) => {
    const salt = await bcrypt.getSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = async (
    plainPassword,
    hashedPassword
) => {
    return bcrypt.compare(
        plainPassword,
        hashedPassword
    );
};

module.exports = {
    hashPassword,
    comparePassword,
};







