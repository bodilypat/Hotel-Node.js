//src/core/middleware/upload.middleware.js 
import path from 'path';
import ApiError from '../errors/ApiError.js';

const storage = multer.memoryStorage();

const allowedMineTypes = [
    'image/jpeg', 
    'image/png', 
    'image/gif',
    'image/webp',
    'application/pdf',
];

const fileFilter = (req, file, cb) => {
    if (allowedMineTypes.includes(file.mimetype)) {
        return cb(
            new ApiError('Invalid file type. Only images and PDFs are allowed.', 400),
            false
        );
    }

    cb(null, true);
};

const upload = multer({
    storage,

    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter,
    });

export default upload;

