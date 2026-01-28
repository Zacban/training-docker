const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Now in usr/app directory.<br /><i>now with less cache busting<(i>');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});