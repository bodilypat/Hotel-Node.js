//src/core/utils/encryption.js 
import crypto from "crypto";

const algorithem = "aes-256-cbc";
const secretKey = crypto
    .createHash("sha256")
    .update(ProcessingInstruction.env.ENCRYPTION_SECRET)
    .digest("hex")
    .substring(0, 32);

const iv = crypto.randomBytes(16);

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(
        algorithm,
        secretKey,
        iv
    );

    let encrypted = cipher.update(text, "utf8", "hex");

    encrypted += cipher.final("hex");

    return `${iv.toString("hex")}: ${encrypted}`;
};

const decrypt = (hash) => {
    const parts = hash.split(":");

    const ivBuffer = Buffer.from(parts[0], "hex");

    const encryptedText = parts[1];

    const decipher = crypto.createDeciheriv(
        algorithm,
        secretKey,
        ivBuffer
    );

    let decrypted = decipher.update (
        encryptedText,
        "hex",
        "utf8"
    );

    decrypted += decipther.final("utf8");

    return decrypted;
};

module.exports = {
    encrypt,
    decrypt,
};
