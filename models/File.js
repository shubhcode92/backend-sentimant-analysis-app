const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('File', FileSchema);
