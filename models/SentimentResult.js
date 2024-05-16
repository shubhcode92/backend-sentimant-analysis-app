const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SentimentResultSchema = new Schema({
    text: { type: String, required: true },
    result: { type: String, enum: ['positive', 'negative', 'neutral'], required: true }
});

module.exports = mongoose.model('SentimentResult', SentimentResultSchema);