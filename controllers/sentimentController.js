const SentimentResult = require('../models/SentimentResult');

exports.analyzeSentiment = async (req, res) => {
    try {
        // inside try block
        const { text } = req.body;
        // demo for placeholder
        const result = Math.random() > 0.5 ? 'positive' : 'negative';

        const sentimentResult = new SentimentResult({
            text,
            result
        });

        await sentimentResult.save();

        res.json({ result: sentimentResult.result });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
