var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

var things = require('./things.js');

app.use('/things', things);

app.listen(3000);