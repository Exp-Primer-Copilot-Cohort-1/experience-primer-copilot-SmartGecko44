// create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// create comments array
const comments = [
    { username: 'Tom', content: 'Hello' },
    { username: 'Jerry', content: 'Hello' },
    { username: 'Spike', content: 'Hello' },
    { username: 'Tyke', content: 'Hello' },
]

// serve static index.html
app.use(express.static('public'));

// get comments
app.get('/api/comments', (req, res) => {
    // set response header
    res.setHeader('Access-Control-Allow-Origin', '*');
    // send comments array
    res.send(comments);
});

// add comment
app.post('/api/comments', (req, res) => {
    // set response header
    res.setHeader('Access-Control-Allow-Origin', '*');
    // add comment to comments array
    comments.push(req.body);
    // send comments array
    res.send(comments);
});

// start server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});