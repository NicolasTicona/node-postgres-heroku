require('dotenv').config();
var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// require('./connection.js');

var app = express();

app.options('*', cors({
    origin: '*',
    methods: 'GET,POST',
    allowedHeaders: '*' 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/prueba', (req, res) => {
    res.json({
        message: 'hola'
    })
})

module.exports = app;