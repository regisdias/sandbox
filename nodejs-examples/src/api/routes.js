const express = require('express');
const router = express.Router();
const LongestWord = require('../algorithms/longestWord');
const BracketMatcher = require('../algorithms/bracketMatcher');

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Node.js Example API' });
});

router.post('/longest-word', (req, res) => {
    const { sentence } = req.body;
    if (!sentence) {
        return res.status(400).json({ error: 'Sentence is required' });
    }
    const result = LongestWord(sentence);
    res.json({ result });
});

router.post('/bracket-matcher', (req, res) => {
    const { str } = req.body;
    if (str === undefined) {
        return res.status(400).json({ error: 'String "str" is required' });
    }
    const result = BracketMatcher(str);
    res.json({ result });
});

module.exports = router;
