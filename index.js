const express = require('express');

const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running'});
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`))