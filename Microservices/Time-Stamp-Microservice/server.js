'use strict'

const express = require('express');

var path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/index.html"))
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
        res.send({ unix: receivedDate, utc: utcDate });
    }
    else
    {
        res.setHeader('Content-Type', 'application/json');
        res.send({ unix: dateAsUnix, utc: utcDate2 });
    }
});

module.exports  = app.listen(PORT, HOST); console.log(`Running on http://${HOST}:${PORT}`);

