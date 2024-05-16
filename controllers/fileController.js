const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const crypto = require('crypto');


const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

let gfs;
mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('uploads');
});

// auto with configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, crypto.randomBytes(16).toString('hex') + path.extname(file.originalname));
    }
});


const fileFilter = (req, file, cb) => {

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'audio/mpeg', 'video/mp4'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('File type not supported'));
    }
    cb(null, true);
};

// Multer upload instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

exports.uploadFile = upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Create new file object
        const newFile = {
            filename: req.file.filename,
            contentType: req.file.mimetype,
            userId: req.user.id
        };

        // Store file in GridFS
        const writeStream = gfs.createWriteStream({ filename: req.file.filename });
        await writeStream.end(req.file.buffer);

        // Save file metadata to database
        const File = require('../models/File');
        const file = await File.create(newFile);

        res.status(201).json({ message: 'File uploaded successfully', file });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
