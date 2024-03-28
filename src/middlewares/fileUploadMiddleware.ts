import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';

const destinationFolder = path.join(__dirname, 'bankStatements');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destinationFolder); // Absolute path to the destination folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // File name generation
    }
  });

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Maximum file size (10MB in this case)
}); // Field name for the file in the form data

// const upload = multer({ storage }).single('bankStatementAttachment');

export default upload;