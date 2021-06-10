var express = require('express')
var path = require('path')

var port = Number(process.argv[2])

var app = express()

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
  let dateString = new Date().toDateString();
  res.render('index', { date: dateString });
});

app.listen(port);
console.log('Listening to port '+port);
