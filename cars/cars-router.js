const express = require('express');
const router = express.Router();
const db = require('../data/connection');

router.get('/', (req, res) => {
    db.then(cars => {
        res.status(200).json({ data: cars });
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});


module.exports = router;