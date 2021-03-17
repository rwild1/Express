/* Create An Application, Deploy With Pm2 And Nginx */
const express = require('express');
const fs = require('fs');

// This represents our application.
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Read file using express server.
app.get('/db', (re, res) => {
    fs.readFile('./data/db.json', (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.send(JSON.parse(result));
        }
    });
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));