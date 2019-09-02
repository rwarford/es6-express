// app.js

import express from 'express';

const {
    PORT = 3001
} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}`)
);