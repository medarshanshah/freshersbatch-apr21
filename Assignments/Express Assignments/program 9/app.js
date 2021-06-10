var express = require('express')
var fs = require('fs')
var port = process.argv[2]
var filename = process.argv[3]

var app = express()

app.get('/books', (req, res) => {
  fs.readFile(filename, (err, data) => {
    
    let object;

    object = JSON.parse(data);
    res.json(object);

  });
});


app.listen(port);
console.log('Listening to port '+port);