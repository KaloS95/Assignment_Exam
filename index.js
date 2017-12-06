var http = require('http');

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Ciaone');
})


app.listen(process.env.PORT || 8080);


