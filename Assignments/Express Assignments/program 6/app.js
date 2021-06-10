var express = require('express')
var path = require('path')
// var stylus = require('stylus')
var port = 3000;

var app = express()
var publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(port);
