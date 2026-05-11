//src/core/service/upload.service.js 
import cloudinary from "../../config/cloudinary.js";
import logger from "../../config/logger.js";
import fs from "fs";

class UploadService {
    async uploadImage(filePath, folder = "hotel-management") {
        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder,
            });

            fs.unlinkSync(filePath);

            return {
                url: result.secure_url,
                publicId: result.public_id,
            };
        } catch (error) {
            logger.error("Image upload failed", error);
            throw error;
        }
    }

    async deleteImage(publicId) {
        try {
            return await cloudinary.uploader.destroy(publicId);
        } catch(error) {
            logger.error("Image deletion failed", error);
            throw error;
        }
    }
}

export default new UploadService();

