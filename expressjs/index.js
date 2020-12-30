const { request } = require('express');
var express = require('express');
var app = express();
var cors = require('cors');
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

var contact = require('./contact.js');

app.use('/API/contact', contact);

app.listen(port);