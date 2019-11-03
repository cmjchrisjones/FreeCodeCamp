'use strict'

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hey up\n');
    console.log("Received a request");
});

app.get('/api/timestamp/:date_string?', (req, res) => {
    const receivedDate = req.query.date_string;
    console.log(receivedDate);
    let dateAsUnix = Date.parse(receivedDate);
    let utcDate = new Date(receivedDate);
    var utcDate2 = utcDate.toUTCString();

    if (utcDate.getMonth() === null) 
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ unix: receivedDate, utc: utcDate }));
    }
    else
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ unix: dateAsUnix, utc: utcDate2 }));
    }
});

app.listen(PORT, HOST); console.log(`Running on http://${HOST}:${PORT}`);